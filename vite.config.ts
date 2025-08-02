import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-ui': ['lucide-react'],
        },
        chunkFileNames: (chunkInfo) => {
          // Prevent markdown filenames from appearing in chunk names
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          
          // If it's a markdown file, use a generic name to avoid long filenames
          if (facadeModuleId?.includes('.md')) {
            return `assets/article-[hash].js`;
          }
          
          // For other files, use a shortened version of the name
          const cleanName = facadeModuleId?.replace(/\.(js|ts|tsx|jsx)$/, '') || 'chunk';
          return `assets/${cleanName}-[hash].js`;
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
    target: 'es2015', // Target modern browsers for better optimization
  },
});

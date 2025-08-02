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
          
          // Article chunks - split by category
          'articles-ai-research': [
            './src/articles/building-studyabroadgpt-ai-educational-guidance.md',
            './src/articles/lora-fine-tuning-beginners-resource-constrained-ai.md',
            './src/articles/future-ai-education-personalized-learning.md',
            './src/articles/building-ai-solutions-resource-constrained-environments.md',
            './src/articles/future-educational-technology-ai-democratizing-education.md',
            './src/articles/cultural-intelligence-ai-building-systems-local-contexts.md',
            './src/articles/complete-guide-lora-fine-tuning-accessible-llms.md',
            './src/articles/open-source-ai-contributing-global-ai-community.md',
          ],
          'articles-business': [
            './src/articles/entrepreneurship-tech-lessons-codestbd-premium-vpn.md',
            './src/articles/digital-marketing-ai-seo-content-strategy-educational-technology.md',
          ],
          'articles-personal': [
            './src/articles/from-bangladesh-to-india-international-student-ai-researcher.md',
            './src/articles/psychology-solitude-introversion-innovation-technology.md',
            './src/articles/research-product-complete-journey-ai-powered-educational-tools.md',
          ],
          'articles-product': [
            './src/articles/edupath-ai-platform-research-to-product.md',
          ],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
    target: 'es2015', // Target modern browsers for better optimization
  },
});

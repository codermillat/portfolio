// Simple test to check markdown import
export const testMarkdownImport = async () => {
  try {
    console.log('🧪 Testing direct markdown import...');
    
    // Try to import a markdown file directly
    const testImport = await import('../articles/modern-css-techniques.md?raw');
    console.log('✅ Markdown import successful:', typeof testImport.default);
    console.log('📄 Content length:', testImport.default.length);
    console.log('📄 Content preview:', testImport.default.substring(0, 100));
    
    return true;
  } catch (error) {
    console.error('❌ Markdown import failed:', error);
    return false;
  }
}; 
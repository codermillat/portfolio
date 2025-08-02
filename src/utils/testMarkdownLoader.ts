import { loadArticles, getArticleBySlug } from './markdownLoader';

// Test function to verify markdown loading
export const testMarkdownLoader = async () => {
  try {
    console.log('Testing markdown loader...');
    
    // Test loading all articles
    const articles = await loadArticles();
    console.log('Loaded articles:', articles.length);
    articles.forEach(article => {
      console.log(`- ${article.slug}: ${article.metadata.title}`);
      console.log(`  Content length: ${article.content.length} characters`);
    });
    
    // Test loading specific article
    const testSlug = 'lora-fine-tuning-beginners-resource-constrained-ai';
    const article = await getArticleBySlug(testSlug);
    if (article) {
      console.log(`\nFound article "${testSlug}":`);
      console.log(`Title: ${article.metadata.title}`);
      console.log(`Content preview: ${article.content.substring(0, 100)}...`);
    } else {
      console.log(`\nArticle "${testSlug}" not found`);
    }
    
  } catch (error) {
    console.error('Error testing markdown loader:', error);
  }
}; 
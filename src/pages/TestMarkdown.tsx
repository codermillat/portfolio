import React, { useEffect, useState } from 'react';
import { loadArticles, getArticleBySlug, Article } from '../utils/markdownLoader';
import { testMarkdownImport } from '../utils/simpleTest';

const TestMarkdown: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testMarkdownLoading = async () => {
      try {
        console.log('🧪 Testing markdown loading...');
        
        // First test direct import
        const importSuccess = await testMarkdownImport();
        if (!importSuccess) {
          throw new Error('Direct markdown import failed');
        }
        
        // Test loading all articles
        const allArticles = await loadArticles();
        console.log('✅ Loaded articles:', allArticles.length);
        
        // Test loading specific article
        const testArticle = await getArticleBySlug('lora-fine-tuning-beginners-resource-constrained-ai');
        console.log('✅ Test article:', testArticle ? 'Found' : 'Not found');
        
        setArticles(allArticles);
        setLoading(false);
      } catch (err) {
        console.error('❌ Error testing markdown:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    testMarkdownLoading();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Testing markdown loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-w-2xl">
            {error}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Markdown Loading Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <p className="text-green-600 mb-2">✅ Successfully loaded {articles.length} articles</p>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Articles:</h3>
            {articles.map((article, index) => (
              <div key={index} className="border border-gray-200 rounded p-4 mb-4">
                <h4 className="font-semibold text-gray-900">{article.metadata.title}</h4>
                <p className="text-gray-600 text-sm mb-2">Slug: {article.slug}</p>
                <p className="text-gray-600 text-sm mb-2">Content length: {article.content.length} characters</p>
                <p className="text-gray-600 text-sm">Featured: {article.metadata.featured ? 'Yes' : 'No'}</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Content preview:</p>
                  <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-20">
                    {article.content.substring(0, 200)}...
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMarkdown; 
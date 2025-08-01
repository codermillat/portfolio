import React, { useEffect, useState } from 'react';
import { loadArticles, getArticleBySlug } from '../utils/markdownLoader';

const BlogStatus: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing...');
  const [articles, setArticles] = useState<any[]>([]);
  const [testArticle, setTestArticle] = useState<any>(null);

  useEffect(() => {
    const testBlog = async () => {
      try {
        setStatus('Testing blog functionality...');
        
        // Test 1: Load all articles
        const allArticles = await loadArticles();
        setArticles(allArticles);
        
        // Test 2: Load specific article
        const article = await getArticleBySlug('wordpress-development-guide');
        setTestArticle(article);
        
        setStatus(`✅ Blog is working! Loaded ${allArticles.length} articles`);
      } catch (error) {
        setStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    testBlog();
  }, []);

  return (
    <div className="p-8 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog Status Check</h2>
      <p className="mb-4 text-gray-600">{status}</p>
      
      {articles.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Loaded Articles ({articles.length}):</h3>
          {articles.map((article, index) => (
            <div key={index} className="border border-gray-200 rounded p-3 mb-2">
              <h4 className="font-medium">{article.metadata.title}</h4>
              <p className="text-sm text-gray-600">Slug: {article.slug}</p>
              <p className="text-sm text-gray-600">Content length: {article.content.length} characters</p>
              <p className="text-sm text-gray-600">Featured: {article.metadata.featured ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      )}
      
      {testArticle && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Test Article:</h3>
          <div className="border border-gray-200 rounded p-3">
            <h4 className="font-medium">{testArticle.metadata.title}</h4>
            <p className="text-sm text-gray-600">Slug: {testArticle.slug}</p>
            <p className="text-sm text-gray-600">Content preview: {testArticle.content.substring(0, 100)}...</p>
          </div>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold mb-2">Test URLs:</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="/blog" className="text-blue-600 hover:underline">/blog</a> - Blog listing page</li>
          <li><a href="/blog/wordpress-development-guide" className="text-blue-600 hover:underline">/blog/wordpress-development-guide</a> - WordPress article</li>
          <li><a href="/blog/modern-css-techniques" className="text-blue-600 hover:underline">/blog/modern-css-techniques</a> - CSS article</li>
          <li><a href="/blog/react-performance-optimization" className="text-blue-600 hover:underline">/blog/react-performance-optimization</a> - React article</li>
          <li><a href="/blog/nodejs-backend-development" className="text-blue-600 hover:underline">/blog/nodejs-backend-development</a> - Node.js article</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogStatus; 
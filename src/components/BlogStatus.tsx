import React, { useEffect, useState } from 'react';
import { loadArticles, getArticleBySlug, Article } from '../utils/markdownLoader';

const BlogStatus: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing...');
  const [articles, setArticles] = useState<Article[]>([]);
  const [testArticle, setTestArticle] = useState<Article | null>(null);

  useEffect(() => {
    const testBlog = async () => {
      try {
        setStatus('Testing blog functionality...');
        
        // Test 1: Load all articles
        const allArticles = await loadArticles();
        setArticles(allArticles);
        
        // Test 2: Load specific article
        const article = await getArticleBySlug('building-studyabroadgpt-ai-educational-guidance');
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
          <li><a href="/blog/building-studyabroadgpt-ai-educational-guidance" className="text-blue-600 hover:underline">/blog/building-studyabroadgpt-ai-educational-guidance</a> - StudyAbroadGPT AI Guide</li>
          <li><a href="/blog/lora-fine-tuning-beginners-resource-constrained-ai" className="text-blue-600 hover:underline">/blog/lora-fine-tuning-beginners-resource-constrained-ai</a> - LoRA Fine-tuning Tutorial</li>
          <li><a href="/blog/future-ai-education-personalized-learning" className="text-blue-600 hover:underline">/blog/future-ai-education-personalized-learning</a> - Future of AI in Education</li>
          <li><a href="/blog/edupath-ai-platform-research-to-product" className="text-blue-600 hover:underline">/blog/edupath-ai-platform-research-to-product</a> - EduPath-AI Platform Guide</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogStatus; 
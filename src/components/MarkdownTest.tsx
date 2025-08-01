import React, { useEffect, useState } from 'react';
import { loadArticles } from '../utils/markdownLoader';

const MarkdownTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing...');
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const testMarkdown = async () => {
      try {
        setStatus('Loading articles...');
        const loadedArticles = await loadArticles();
        setArticles(loadedArticles);
        setStatus(`Success! Loaded ${loadedArticles.length} articles`);
      } catch (error) {
        setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    testMarkdown();
  }, []);

  return (
    <div className="p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Markdown Loading Test</h2>
      <p className="mb-4 text-gray-600">{status}</p>
      
      {articles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Loaded Articles:</h3>
          {articles.map((article, index) => (
            <div key={index} className="border border-gray-200 rounded p-3 mb-2">
              <h4 className="font-medium">{article.metadata.title}</h4>
              <p className="text-sm text-gray-600">Slug: {article.slug}</p>
              <p className="text-sm text-gray-600">Content length: {article.content.length} characters</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarkdownTest; 
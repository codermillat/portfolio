import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Calendar, User, Tag } from 'lucide-react';
import { loadArticles, Article } from '../utils/markdownLoader';
import Footer from '../components/Footer';
import { getBlogSocialImage, updateSocialMetaTags } from '../utils/socialImages';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('🚀 BlogPage: Component mounted');

  // Load articles
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('🔄 BlogPage: Starting to load articles...');
        const allArticles = await loadArticles();
        console.log('✅ BlogPage: Articles loaded:', allArticles.length, 'articles');
        setArticles(allArticles);
        setLoading(false);
      } catch (error) {
        console.error('❌ BlogPage: Error loading articles:', error);
        setError('Failed to load articles. Please try again later.');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // SEO Optimization
  useEffect(() => {
    const socialImageUrl = getBlogSocialImage();
    updateSocialMetaTags(
      "Blog & Insights - MD MILLAT HOSEN | Web Development, AI Research, Technical Tutorials",
      "Explore insights on web development, WordPress, React, AI research, and modern technologies.",
      socialImageUrl,
      "https://www.millat.tech/blog"
    );
    document.title = "Blog & Insights - MD MILLAT HOSEN";
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-600">Loading articles...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-3xl mb-8">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Blog & Insights
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Articles</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-3xl mb-8">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Technical tutorials, development insights, and thought leadership in modern web technologies
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Check back later for new content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((post) => (
              <ArticleCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
            ))}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Article Card Component
const ArticleCard: React.FC<{
  post: Article;
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    // Only prevent default if it's a regular click (not middle click or ctrl+click)
    if (e.button === 0 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      onBlogClick(post.slug);
    }
  };

  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
      <a 
        href={`/blog/${post.slug}`}
        onClick={handleClick}
        className="block cursor-pointer"
      >
        <div className={`aspect-video bg-gradient-to-br ${post.metadata.gradient || 'from-blue-500 to-purple-600'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {post.metadata.title}
            </h3>
          </div>
        </div>
      
        
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
            {post.metadata.excerpt || post.metadata.description || 'No description available.'}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-medium">{post.metadata.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-500" />
              <span>{formatDate(post.metadata.date)}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags && post.metadata.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};export default BlogPage;

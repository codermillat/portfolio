import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, Tag, ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadArticles, getAllCategories, Article } from '../utils/markdownLoader';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load articles and categories
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('🔄 BlogPage: Loading articles...');
        const allArticles = await loadArticles();
        const allCategories = await getAllCategories();
        console.log('✅ BlogPage: Loaded articles:', allArticles.length);
        console.log('📄 Articles:', allArticles.map(a => ({ 
          slug: a.slug, 
          title: a.metadata.title, 
          contentLength: a.content.length,
          featured: a.metadata.featured 
        })));
        setArticles(allArticles);
        setCategories(allCategories);
      } catch (error) {
        console.error('❌ BlogPage: Error loading articles:', error);
      }
    };

    loadData();
  }, []);

  const featuredPosts = articles.filter(article => article.metadata.featured).slice(0, 3);
  const filteredPosts = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.metadata.category === selectedCategory);
  const allPosts = filteredPosts;

  // SEO Optimization
  useEffect(() => {
    document.title = "Blog & Insights - MD MILLAT HOSEN | Web Development, WordPress, React";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore insights on web development, WordPress, React, and modern technologies. Expert articles on full-stack development, SEO, and mobile app development by MD MILLAT HOSEN.');
    }

    // Add Open Graph meta tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Add Twitter Card meta tags
    const addTwitterMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph tags
    addMetaTag('og:title', 'Blog & Insights - MD MILLAT HOSEN');
    addMetaTag('og:description', 'Explore insights on web development, WordPress, React, and modern technologies');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', 'https://www.millat.tech/blog');
    addMetaTag('og:site_name', 'MD MILLAT HOSEN');

    // Twitter Card tags
    addTwitterMetaTag('twitter:card', 'summary_large_image');
    addTwitterMetaTag('twitter:title', 'Blog & Insights - MD MILLAT HOSEN');
    addTwitterMetaTag('twitter:description', 'Explore insights on web development, WordPress, React, and modern technologies');
    addTwitterMetaTag('twitter:creator', '@codermillat');

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.millat.tech/blog');

    // Add structured data
    const addStructuredData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "MD MILLAT HOSEN Blog",
        "description": "Web development, WordPress, React, and modern technology insights",
        "url": "https://www.millat.tech/blog",
        "author": {
          "@type": "Person",
          "name": "MD MILLAT HOSEN",
          "url": "https://www.millat.tech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MD MILLAT HOSEN",
          "url": "https://www.millat.tech"
        }
      });
      document.head.appendChild(script);
    };
    
    addStructuredData();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(allPosts.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [allPosts.length]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(allPosts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(allPosts.length / 3) - 1 : prev - 1
    );
  };

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Exploring web development, WordPress, React, and modern technologies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center sm:justify-start mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
              <Filter className="w-6 h-6 mr-3 text-blue-600" />
              Browse by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Articles ({articles.length})
            </button>
            {categories.map((category) => {
              const categoryCount = articles.filter(article => article.metadata.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({categoryCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center sm:justify-start mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
                <span className="inline-block w-8 sm:w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 sm:mr-4"></span>
                Featured Articles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredPosts.map((post) => (
                <FeaturedCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
              <span className="inline-block w-8 sm:w-10 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-3 sm:mr-4"></span>
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {allPosts.length > 6 && (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>
            )}
          </div>

          {allPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
            </div>
          ) : (
            <>
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}>
                  {Array.from({ length: Math.ceil(allPosts.length / 3) }, (_, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {allPosts.slice(index * 3, index * 3 + 3).map((post) => (
                          <ArticleCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Indicators */}
              {Math.ceil(allPosts.length / 3) > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: Math.ceil(allPosts.length / 3) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>


      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Featured Card Component
const FeaturedCard: React.FC<{
  post: Article;
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={() => onBlogClick(post.slug)}>
      <div className={`aspect-video bg-gradient-to-br ${post.metadata.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
            Featured
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {post.metadata.title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 sm:p-8">
        <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {post.metadata.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mb-6 sm:mb-8 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{post.metadata.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-500" />
            <span>{formatDate(post.metadata.date)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:scale-105">
            Read More
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </article>
  );
};

// Article Card Component
const ArticleCard: React.FC<{
  post: Article;
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 cursor-pointer" onClick={() => onBlogClick(post.slug)}>
      <div className={`aspect-video bg-gradient-to-br ${post.metadata.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {post.metadata.title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 sm:p-8">
        <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {post.metadata.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mb-6 sm:mb-8 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{post.metadata.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-500" />
            <span>{formatDate(post.metadata.date)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:scale-105">
            Read More
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogPage; 
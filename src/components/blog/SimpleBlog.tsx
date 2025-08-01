import React, { useEffect, useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadArticles, Article } from '../../utils/markdownLoader';

// Remove the old interface since we're using the one from markdownLoader

// Component uses gradients from article metadata

const SimpleBlog: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load articles on component mount
  useEffect(() => {
    const loadArticlesData = async () => {
      try {
        const allArticles = await loadArticles();
        setArticles(allArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticlesData();
  }, []);

  const featuredPosts = articles.filter(article => article.metadata.featured);

  // Update SEO meta tags
  useEffect(() => {
    document.title = "Blog - MD MILLAT HOSEN | Web Development & Tech Insights";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore insights on WordPress development, React optimization, web development best practices, and technical tutorials. Expert articles by MD MILLAT HOSEN.');
    }
  }, []);

  // Auto-scroll functionality - only if there are more than 3 articles
  useEffect(() => {
    if (featuredPosts.length <= 3) return; // Don't auto-scroll if only 3 or fewer articles
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = Math.ceil(featuredPosts.length / 3) - 1;
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

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

  const nextSlide = () => {
    const maxSlides = Math.ceil(featuredPosts.length / 3) - 1;
    if (maxSlides > 0) {
      setCurrentSlide(currentSlide >= maxSlides ? 0 : currentSlide + 1);
    }
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(featuredPosts.length / 3) - 1;
    if (maxSlides > 0) {
      setCurrentSlide(currentSlide <= 0 ? maxSlides : currentSlide - 1);
    }
  };

  const getCurrentPosts = () => {
    const startIndex = currentSlide * 3;
    return featuredPosts.slice(startIndex, startIndex + 3);
  };

  if (loading) {
    return (
      <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Blog & Insights
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Blog & Insights
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sharing knowledge and insights on web development, WordPress, React, and modern web technologies. 
            <span className="block sm:inline"> Practical tutorials and best practices for developers.</span>
          </p>
        </div>

        {/* Featured Articles Slider */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
                <span className="inline-block w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></span>
                Featured Articles
              </h3>
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Visit Blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            {/* Slider Container */}
            <div className="relative">
              {/* Articles Grid with Proper Spacing */}
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 transition-all duration-500 ease-in-out">
                  {getCurrentPosts().map((post, index) => (
                    <div 
                      key={post.slug} 
                      className="transition-all duration-500 ease-in-out transform"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      <FeaturedPostCard post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Only show if there are more than 3 articles */}
              {featuredPosts.length > 3 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute -left-4 sm:-left-6 lg:-left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute -right-4 sm:-right-6 lg:-right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              {/* Pagination Dots - Only show if there are more than 3 articles */}
              {featuredPosts.length > 3 && Math.ceil(featuredPosts.length / 3) > 1 && (
                <div className="flex justify-center mt-6 space-x-1.5">
                  {Array.from({ length: Math.ceil(featuredPosts.length / 3) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-blue-600 scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

// Enhanced Featured Post Card Component
const FeaturedPostCard: React.FC<{ 
  post: Article; 
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
      <div className={`aspect-video bg-gradient-to-br ${post.metadata.gradient} relative cursor-pointer overflow-hidden`} onClick={() => onBlogClick(post.slug)}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
            Featured
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
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
            {post.metadata.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => onBlogClick(post.slug)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:scale-105 group-hover:bg-blue-50 px-3 py-2 rounded-lg"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </article>
  );
};



export default SimpleBlog; 
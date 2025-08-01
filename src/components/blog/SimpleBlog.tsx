import React, { useEffect } from 'react';
import { BookOpen, Calendar, User, Tag, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  featured: boolean;
  excerpt: string;
  gradient: string;
}

// Dynamic gradient combinations for colorful cards
const gradients = [
  'from-blue-500 to-purple-600',
  'from-green-500 to-blue-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-red-600',
  'from-teal-500 to-cyan-600',
  'from-indigo-500 to-purple-600',
  'from-pink-500 to-rose-600',
  'from-yellow-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-rose-500 to-pink-600'
];

// Static blog posts data with dynamic gradients
const staticBlogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-wordpress-development',
    title: 'Getting Started with WordPress Development: A Complete Guide',
    description: 'Learn the fundamentals of WordPress development, from setting up your environment to creating custom themes and plugins. Perfect for beginners and intermediate developers.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-27',
    tags: ['WordPress', 'Web Development', 'PHP', 'Tutorial'],
    featured: true,
    excerpt: 'WordPress powers over 40% of all websites on the internet, making it one of the most popular content management systems. Whether you\'re a beginner or an experienced developer, understanding WordPress development can open up numerous opportunities.',
    gradient: gradients[0] // Blue to Purple
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: 10 Essential Techniques',
    description: 'Master React performance optimization with these 10 essential techniques. Learn how to build faster, more efficient React applications with practical examples and best practices.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-26',
    tags: ['React', 'JavaScript', 'Performance', 'Frontend', 'Optimization'],
    featured: false,
    excerpt: 'React is a powerful library for building user interfaces, but as applications grow, performance can become a concern. In this comprehensive guide, we\'ll explore 10 essential techniques to optimize your React applications.',
    gradient: gradients[1] // Green to Blue
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques for Better Web Design',
    description: 'Explore cutting-edge CSS techniques including Grid, Flexbox, Custom Properties, and advanced animations to create stunning web designs.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-25',
    tags: ['CSS', 'Web Design', 'Frontend', 'Animation'],
    featured: true,
    excerpt: 'CSS has evolved dramatically over the years, offering powerful new features that make web design more flexible and creative than ever before. From CSS Grid to Custom Properties, modern CSS techniques are revolutionizing how we build websites.',
    gradient: gradients[2] // Purple to Pink
  },
  {
    slug: 'nodejs-backend-development',
    title: 'Building Scalable Backends with Node.js',
    description: 'Learn how to build robust, scalable backend applications using Node.js, Express, and modern JavaScript practices.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-24',
    tags: ['Node.js', 'Backend', 'JavaScript', 'API'],
    featured: false,
    excerpt: 'Node.js has become the go-to platform for building fast, scalable backend applications. With its event-driven, non-blocking I/O model, Node.js is perfect for building real-time applications and APIs.',
    gradient: gradients[3] // Orange to Red
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development: React Native vs Flutter',
    description: 'Compare React Native and Flutter for cross-platform mobile development. Learn the pros, cons, and when to use each framework.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-23',
    tags: ['Mobile', 'React Native', 'Flutter', 'Cross-platform'],
    featured: false,
    excerpt: 'Cross-platform mobile development has revolutionized how we build apps. With frameworks like React Native and Flutter, developers can create native-quality apps for both iOS and Android with a single codebase.',
    gradient: gradients[4] // Teal to Cyan
  },
  {
    slug: 'seo-best-practices',
    title: 'SEO Best Practices for Modern Websites',
    description: 'Master the latest SEO techniques to improve your website\'s search engine rankings and drive more organic traffic.',
    author: 'MD MILLAT HOSEN',
    date: '2025-01-22',
    tags: ['SEO', 'Marketing', 'Web Development', 'Analytics'],
    featured: false,
    excerpt: 'Search Engine Optimization is crucial for any website that wants to be found online. With constantly evolving algorithms, staying up-to-date with SEO best practices is essential for success.',
    gradient: gradients[5] // Indigo to Purple
  }
];

const SimpleBlog: React.FC = () => {
  const navigate = useNavigate();
  const featuredPosts = staticBlogPosts.filter(post => post.featured);
  const allTags = Array.from(new Set(staticBlogPosts.flatMap(post => post.tags))).sort();

  // Update SEO meta tags
  useEffect(() => {
    document.title = "Blog - MD MILLAT HOSEN | Web Development & Tech Insights";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore insights on WordPress development, React optimization, web development best practices, and technical tutorials. Expert articles by MD MILLAT HOSEN.');
    }
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center justify-center sm:justify-start mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
                <span className="inline-block w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></span>
                Featured Articles
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {staticBlogPosts.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 flex items-center">
                <span className="inline-block w-8 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-4"></span>
                All Articles
              </h3>
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Visit Blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {staticBlogPosts.slice(0, 3).map((post) => (
                <PostCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Newsletter Signup */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Stay Updated</h3>
            <p className="text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Get the latest articles on web development, WordPress tips, and React optimization techniques 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 text-base"
              />
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Featured Post Card Component
const FeaturedPostCard: React.FC<{ 
  post: BlogPost; 
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative cursor-pointer overflow-hidden`} onClick={() => onBlogClick(post.slug)}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
            Featured
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {post.title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 sm:p-8">
        <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mb-6 sm:mb-8 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-500" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </article>
  );
};

// Enhanced Regular Post Card Component
const PostCard: React.FC<{ 
  post: BlogPost; 
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="group bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
      <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative cursor-pointer overflow-hidden`} onClick={() => onBlogClick(post.slug)}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {post.title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 sm:p-8">
        <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mb-6 sm:mb-8 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-500" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:scale-105"
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
import React, { useEffect } from 'react';
import { BookOpen, Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';

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
    // For now, we'll show an alert with the blog post info
    // In a real implementation, this would navigate to a blog post page
    const post = staticBlogPosts.find(p => p.slug === slug);
    if (post) {
      alert(`Blog Post: ${post.title}\n\nThis is a preview. In a full implementation, this would navigate to the complete article.\n\nDescription: ${post.description}`);
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and insights on web development, WordPress, React, and modern web technologies. 
            Practical tutorials and best practices for developers.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
              ))}
            </div>
          </div>
        )}

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse by Topic</h3>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {staticBlogPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staticBlogPosts.map((post) => (
                <PostCard key={post.slug} post={post} formatDate={formatDate} onBlogClick={handleBlogClick} />
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles on web development, WordPress tips, and React optimization techniques 
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Post Card Component
const FeaturedPostCard: React.FC<{ 
  post: BlogPost; 
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative cursor-pointer`} onClick={() => onBlogClick(post.slug)}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
            Featured
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {post.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.date)}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => onBlogClick(post.slug)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

// Regular Post Card Component
const PostCard: React.FC<{ 
  post: BlogPost; 
  formatDate: (date: string) => string;
  onBlogClick: (slug: string) => void;
}> = ({ post, formatDate, onBlogClick }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative cursor-pointer`} onClick={() => onBlogClick(post.slug)}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {post.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.date)}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => onBlogClick(post.slug)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SimpleBlog; 
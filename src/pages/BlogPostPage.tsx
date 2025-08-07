import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Copy, Check } from 'lucide-react';
import { getArticleBySlug, Article } from '../utils/markdownLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import Footer from '../components/Footer';
import { trackBlogView, trackButtonClick } from '../utils/analytics';
// TypeScript interfaces for ReactMarkdown components
interface MarkdownComponentProps {
  children?: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const [post, setPost] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Load article
  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      try {
        console.log('🔄 BlogPostPage: Loading article with slug:', slug);
        const article = await getArticleBySlug(slug);
        console.log('✅ BlogPostPage: Article loaded:', article ? {
          title: article.metadata.title,
          contentLength: article.content.length,
          contentPreview: article.content.substring(0, 100)
        } : 'null');
        setPost(article);
        
        // Track blog article view
        if (article) {
          trackBlogView(slug, article.metadata.title);
        }
      } catch (error) {
        console.error('❌ BlogPostPage: Error loading article:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  // Copy code functionality
  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      trackButtonClick('Copy Code', 'Blog Article');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Custom components for ReactMarkdown
  const components = {
    h1: ({ children, ...props }: MarkdownComponentProps) => (
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 mt-8 first:mt-0 leading-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: MarkdownComponentProps) => (
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 mt-8 leading-tight relative" {...props}>
        <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: MarkdownComponentProps) => (
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 mt-6 leading-tight relative pl-4" {...props}>
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: MarkdownComponentProps) => (
      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 mt-6 leading-tight" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: MarkdownComponentProps) => (
      <p className="mb-4 text-gray-800 leading-relaxed text-base font-medium" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: MarkdownComponentProps) => (
      <ul className="list-none mb-4 space-y-2 text-gray-800" {...props}>
        {React.Children.map(children, (child) => 
          React.isValidElement(child) ? 
            React.cloneElement(child as React.ReactElement<any>, {
              className: "flex items-start space-x-3"
            }) : child
        )}
      </ul>
    ),
    ol: ({ children, ...props }: MarkdownComponentProps) => (
      <ol className="list-none mb-4 space-y-2 text-gray-800 counter-reset-list" {...props}>
        {React.Children.map(children, (child) => 
          React.isValidElement(child) ? 
            React.cloneElement(child as React.ReactElement<any>, {
              className: "flex items-start space-x-3 counter-increment-list"
            }) : child
        )}
      </ol>
    ),
    li: ({ children, ...props }: MarkdownComponentProps) => (
      <li className="text-gray-800 leading-relaxed flex items-start space-x-3 font-medium" {...props}>
        <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></span>
        <span className="flex-1">{children}</span>
      </li>
    ),
    blockquote: ({ children, ...props }: MarkdownComponentProps) => (
      <blockquote className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 bg-gradient-to-r from-blue-50 to-purple-50 pl-6 py-4 my-6 text-gray-800 italic rounded-r-lg shadow-sm relative overflow-hidden" {...props}>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="relative z-10">
          {children}
        </div>
      </blockquote>
    ),
    code: ({ children, className, ...props }: MarkdownComponentProps) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-md text-sm font-mono border border-blue-200/50" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }: MarkdownComponentProps) => {
      const codeElement = React.Children.toArray(children).find(
        (child: React.ReactNode) => React.isValidElement(child) && child.type === 'code'
      );
      
      if (codeElement && React.isValidElement(codeElement)) {
        const code = codeElement.props.children;
        const language = codeElement.props.className?.replace('language-', '') || 'text';
        
        return (
          <div className="relative my-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-gray-300 text-sm font-medium capitalize">{language}</span>
                <button
                  onClick={() => copyToClipboard(code)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {copiedCode === code ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto" {...props}>
                {children}
              </pre>
            </div>
          </div>
        );
      }
      return <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4" {...props}>{children}</pre>;
    },
    table: ({ children, ...props }: MarkdownComponentProps) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: MarkdownComponentProps) => (
      <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: MarkdownComponentProps) => (
      <tbody className="divide-y divide-gray-200 bg-white" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: MarkdownComponentProps) => (
      <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: MarkdownComponentProps) => (
      <th className="px-6 py-4 text-left text-sm font-semibold text-white" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: MarkdownComponentProps) => (
      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100" {...props}>
        {children}
      </td>
    ),
    a: ({ href, children, ...props }: MarkdownComponentProps) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ children, ...props }: MarkdownComponentProps) => (
      <strong className="font-semibold text-gray-900" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: MarkdownComponentProps) => (
      <em className="italic text-gray-800" {...props}>
        {children}
      </em>
    ),
    hr: ({ ...props }: MarkdownComponentProps) => (
      <hr className="my-8 border-gray-300" {...props} />
    ),
  };

  useEffect(() => {
    if (post) {
      // Update document title
      document.title = `${post.metadata.title} - MD MILLAT HOSEN | Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metadata.description);
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
      addMetaTag('og:title', post.metadata.title);
      addMetaTag('og:description', post.metadata.description);
      addMetaTag('og:type', 'article');
      addMetaTag('og:url', `https://www.millat.tech/blog/${post.slug}`);
      addMetaTag('og:site_name', 'MD MILLAT HOSEN');
      addMetaTag('article:author', post.metadata.author);
      addMetaTag('article:published_time', post.metadata.date);

      // Twitter Card tags
      addTwitterMetaTag('twitter:card', 'summary_large_image');
      addTwitterMetaTag('twitter:title', post.metadata.title);
      addTwitterMetaTag('twitter:description', post.metadata.description);
      addTwitterMetaTag('twitter:creator', '@codermillat');

      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://www.millat.tech/blog/${post.slug}`);

      // Add structured data
      const addStructuredData = () => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.metadata.title,
          "description": post.metadata.description,
          "author": {
            "@type": "Person",
            "name": post.metadata.author,
            "url": "https://www.millat.tech"
          },
          "datePublished": post.metadata.date,
          "dateModified": post.metadata.date,
          "publisher": {
            "@type": "Organization",
            "name": "MD MILLAT HOSEN",
            "url": "https://www.millat.tech"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.millat.tech/blog/${post.slug}`
          },
          "keywords": post.metadata.tags.join(', '),
          "articleSection": post.metadata.category
        });
        document.head.appendChild(script);
      };
      
      addStructuredData();
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };



  const readingTime = getReadingTime(post.content);

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${post.metadata.gradient} text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-bold text-white mb-6 border border-white/40 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            {post.metadata.category}
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
            {post.metadata.title}
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl leading-relaxed font-medium drop-shadow-md">
            {post.metadata.description}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white text-sm sm:text-base font-medium">
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">{post.metadata.author}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">{formatDate(post.metadata.date)}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">{readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          
          {/* Tags */}
          <div className="px-6 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-12">
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
              {post.metadata.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200 border border-blue-200/50 shadow-sm"
                >
                  <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-blue-600" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-em:text-gray-800 prose-blue">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={components}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 px-6 sm:px-8 lg:px-12 py-6 sm:py-8 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-indigo-50/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">Share this article</h3>
                <p className="text-gray-700 text-sm sm:text-base font-medium">Help others discover this content</p>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    const url = `https://www.millat.tech/blog/${post.slug}`;
                    const text = post.metadata.title;
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button
                  onClick={() => {
                    const url = `https://www.millat.tech/blog/${post.slug}`;
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </article>
  );
};

export default BlogPostPage; 
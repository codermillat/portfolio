// Social image generation utilities for dynamic Open Graph images
// Similar to GitHub's social image generation system

export interface SocialImageOptions {
  title: string;
  description: string;
  type: 'portfolio' | 'article' | 'blog';
  author?: string;
  category?: string;
  tags?: string[];
  gradient?: string;
}

/**
 * Generate social image URL for Open Graph and Twitter Cards
 * This creates a URL that points to our static image generator
 */
export const generateSocialImageUrl = (options: SocialImageOptions): string => {
  // Use static pre-generated images for better performance
  const staticImages = {
    portfolio: 'https://www.millat.tech/social-images/portfolio-social.html',
    blog: 'https://www.millat.tech/social-images/blog-social.html',
    article: 'https://www.millat.tech/api/og-image.html'
  };

  // For articles, use dynamic generation with parameters
  if (options.type === 'article') {
    const params = new URLSearchParams({
      title: options.title.substring(0, 100),
      description: options.description.substring(0, 200),
      type: options.type,
      author: options.author || 'MD MILLAT HOSEN',
    });

    if (options.category) {
      params.append('category', options.category);
    }

    if (options.tags && options.tags.length > 0) {
      params.append('tags', options.tags.slice(0, 3).join(','));
    }

    return `${staticImages.article}?${params.toString()}`;
  }

  // For static pages, use pre-generated images
  return staticImages[options.type as keyof typeof staticImages] || staticImages.portfolio;
};

/**
 * Generate social image for the homepage
 */
export const getHomepageSocialImage = (): string => {
  return generateSocialImageUrl({
    title: 'MD MILLAT HOSEN',
    description: 'Expert Full Stack Developer & AI Researcher specializing in WordPress, React, Node.js, and machine learning. Building meaningful solutions with technical excellence.',
    type: 'portfolio',
    category: 'Portfolio',
    tags: ['Full Stack', 'AI Research', 'React', 'Node.js']
  });
};

/**
 * Generate social image for blog articles
 */
export const getArticleSocialImage = (
  title: string,
  description: string,
  category: string,
  tags: string[]
): string => {
  return generateSocialImageUrl({
    title,
    description,
    type: 'article',
    category,
    tags
  });
};

/**
 * Generate social image for blog listing page
 */
export const getBlogSocialImage = (): string => {
  return generateSocialImageUrl({
    title: 'Blog & Insights',
    description: 'Explore insights on WordPress development, React optimization, AI research, and technical tutorials by MD MILLAT HOSEN.',
    type: 'article',
    category: 'Blog',
    tags: ['Web Development', 'AI Research', 'Tutorials']
  });
};

/**
 * Update meta tags for social sharing
 */
export const updateSocialMetaTags = (
  title: string,
  description: string,
  imageUrl: string,
  url: string
): void => {
  // Update Open Graph tags
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:image', imageUrl);
  updateMetaTag('og:url', url);
  updateMetaTag('og:type', 'website');
  updateMetaTag('og:site_name', 'MD MILLAT HOSEN');

  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', imageUrl);
  updateMetaTag('twitter:creator', '@codermillat');
  updateMetaTag('twitter:site', '@codermillat');

  // Update standard meta tags
  document.title = title;
  updateMetaTag('description', description);
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (name: string, content: string): void => {
  const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
  const attribute = isProperty ? 'property' : 'name';
  
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

/**
 * Preload social images for better performance
 */
export const preloadSocialImage = (imageUrl: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = imageUrl;
  document.head.appendChild(link);
};

/**
 * Generate social image for specific routes
 */
export const getSocialImageForRoute = (route: string, data?: any): string => {
  switch (route) {
    case '/':
      return getHomepageSocialImage();
    
    case '/blog':
      return getBlogSocialImage();
    
    default:
      if (route.startsWith('/blog/') && data) {
        return getArticleSocialImage(
          data.title,
          data.description,
          data.category,
          data.tags
        );
      }
      return getHomepageSocialImage();
  }
};

// Export default configuration
export const defaultSocialConfig = {
  siteName: 'MD MILLAT HOSEN',
  author: 'MD MILLAT HOSEN',
  twitterHandle: '@codermillat',
  defaultImage: getHomepageSocialImage(),
  imageWidth: 1200,
  imageHeight: 630,
};

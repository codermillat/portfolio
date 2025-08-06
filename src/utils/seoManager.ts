// Comprehensive SEO utility for meta tag management
// Handles all aspects of SEO including structured data, meta tags, and social sharing

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  robots?: string;
  openGraph?: {
    type?: string;
    image?: string;
    imageAlt?: string;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: string;
    creator?: string;
    site?: string;
  };
  structuredData?: any;
}

/**
 * Comprehensive SEO manager class
 */
export class SEOManager {
  private defaultConfig: Partial<SEOConfig> = {
    author: 'MD MILLAT HOSEN',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
      siteName: 'MD MILLAT HOSEN Portfolio',
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@codermillat',
      site: '@codermillat'
    }
  };

  /**
   * Update all SEO meta tags for a page
   */
  updateSEO(config: SEOConfig): void {
    const fullConfig = { ...this.defaultConfig, ...config };

    // Update document title
    document.title = fullConfig.title;

    // Update basic meta tags
    this.updateMetaTag('description', fullConfig.description);
    
    if (fullConfig.keywords && fullConfig.keywords.length > 0) {
      this.updateMetaTag('keywords', fullConfig.keywords.join(', '));
    }
    
    if (fullConfig.author) {
      this.updateMetaTag('author', fullConfig.author);
    }
    
    if (fullConfig.robots) {
      this.updateMetaTag('robots', fullConfig.robots);
    }

    // Update Open Graph tags
    this.updateOpenGraphTags(fullConfig);

    // Update Twitter Card tags
    this.updateTwitterTags(fullConfig);

    // Update canonical URL
    if (fullConfig.canonical) {
      this.updateCanonicalURL(fullConfig.canonical);
    }

    // Update structured data
    if (fullConfig.structuredData) {
      this.updateStructuredData(fullConfig.structuredData);
    }
  }

  /**
   * Update or create a meta tag
   */
  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Update Open Graph meta tags
   */
  private updateOpenGraphTags(config: SEOConfig): void {
    const og = config.openGraph || {};

    this.updatePropertyTag('og:title', config.title);
    this.updatePropertyTag('og:description', config.description);
    this.updatePropertyTag('og:type', og.type || 'website');
    
    if (config.canonical) {
      this.updatePropertyTag('og:url', config.canonical);
    }
    
    if (og.siteName) {
      this.updatePropertyTag('og:site_name', og.siteName);
    }
    
    if (og.locale) {
      this.updatePropertyTag('og:locale', og.locale);
    }
    
    if (og.image) {
      this.updatePropertyTag('og:image', og.image);
      this.updatePropertyTag('og:image:width', '1200');
      this.updatePropertyTag('og:image:height', '630');
      
      if (og.imageAlt) {
        this.updatePropertyTag('og:image:alt', og.imageAlt);
      }
    }
  }

  /**
   * Update Twitter Card meta tags
   */
  private updateTwitterTags(config: SEOConfig): void {
    const twitter = config.twitter || {};

    this.updateNameTag('twitter:card', twitter.card || 'summary_large_image');
    this.updateNameTag('twitter:title', config.title);
    this.updateNameTag('twitter:description', config.description);
    
    if (twitter.creator) {
      this.updateNameTag('twitter:creator', twitter.creator);
    }
    
    if (twitter.site) {
      this.updateNameTag('twitter:site', twitter.site);
    }
    
    if (config.openGraph?.image) {
      this.updateNameTag('twitter:image', config.openGraph.image);
    }
  }

  /**
   * Update property meta tags (for Open Graph)
   */
  private updatePropertyTag(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Update name meta tags (for Twitter Cards)
   */
  private updateNameTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalURL(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  }

  /**
   * Update structured data (JSON-LD)
   */
  private updateStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  /**
   * Generate structured data for a blog article
   */
  generateArticleStructuredData(article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    category: string;
    tags: string[];
    url: string;
    image?: string;
    wordCount?: number;
  }): any {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author,
        "url": "https://www.millat.tech",
        "sameAs": [
          "https://twitter.com/codermillat",
          "https://linkedin.com/in/mdmillathosen",
          "https://github.com/codermillat"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "MD MILLAT HOSEN",
        "url": "https://www.millat.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.millat.tech/favicon-32x32.png"
        }
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      },
      "keywords": article.tags.join(', '),
      "articleSection": article.category,
      "wordCount": article.wordCount,
      "inLanguage": "en-US"
    };
  }

  /**
   * Generate structured data for the homepage
   */
  generatePersonStructuredData(): any {
    return {
      "@context": "https://schema.org",
      "@type": ["Person", "WebPage"],
      "name": "MD MILLAT HOSEN",
      "givenName": "MD MILLAT",
      "familyName": "HOSEN",
      "jobTitle": "Full Stack Developer & AI Researcher",
      "description": "Expert Full Stack Developer & AI Researcher specializing in WordPress, React, Node.js, and machine learning applications",
      "url": "https://www.millat.tech/",
      "sameAs": [
        "https://twitter.com/codermillat",
        "https://linkedin.com/in/mdmillathosen",
        "https://github.com/codermillat"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Galgotias University"
      },
      "knowsAbout": [
        "Full Stack Development",
        "WordPress Development",
        "React.js",
        "Node.js",
        "Machine Learning",
        "Educational Technology",
        "AI Research"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.millat.tech/"
      }
    };
  }

  /**
   * Generate structured data for blog listing page
   */
  generateBlogStructuredData(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "MD MILLAT HOSEN Blog",
      "description": "Expert insights on web development, AI research, and technical tutorials",
      "url": "https://www.millat.tech/blog",
      "author": {
        "@type": "Person",
        "name": "MD MILLAT HOSEN",
        "url": "https://www.millat.tech",
        "sameAs": [
          "https://twitter.com/codermillat",
          "https://linkedin.com/in/mdmillathosen",
          "https://github.com/codermillat"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "MD MILLAT HOSEN",
        "url": "https://www.millat.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.millat.tech/favicon-32x32.png"
        }
      },
      "inLanguage": "en-US",
      "keywords": "web development, AI research, React, WordPress, full-stack development, machine learning, educational technology"
    };
  }

  /**
   * Validate current page SEO
   */
  validatePageSEO(): {
    score: number;
    issues: string[];
    suggestions: string[];
  } {
    const issues: string[] = [];
    const suggestions: string[] = [];

    // Check title
    const title = document.title;
    if (!title || title.length === 0) {
      issues.push('Missing page title');
    } else if (title.length > 60) {
      suggestions.push('Page title is too long (>60 characters)');
    } else if (title.length < 30) {
      suggestions.push('Page title might be too short (<30 characters)');
    }

    // Check meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      issues.push('Missing meta description');
    } else {
      const content = metaDesc.getAttribute('content') || '';
      if (content.length === 0) {
        issues.push('Empty meta description');
      } else if (content.length > 160) {
        suggestions.push('Meta description is too long (>160 characters)');
      } else if (content.length < 120) {
        suggestions.push('Meta description might be too short (<120 characters)');
      }
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogTitle) issues.push('Missing Open Graph title');
    if (!ogDesc) issues.push('Missing Open Graph description');
    if (!ogImage) issues.push('Missing Open Graph image');

    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      suggestions.push('Consider adding structured data for better search engine understanding');
    }

    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      suggestions.push('Consider adding canonical URL');
    }

    // Calculate score
    const totalChecks = 8;
    const issueCount = issues.length;
    const score = Math.max(0, Math.round(((totalChecks - issueCount) / totalChecks) * 100));

    return { score, issues, suggestions };
  }
}

// Export singleton SEO manager instance
export const seoManager = new SEOManager();

/**
 * Quick SEO update function for common use cases
 */
export const updatePageSEO = (config: SEOConfig): void => {
  seoManager.updateSEO(config);
};

/**
 * Generate social image URL with proper encoding
 */
export const generateSocialImageURL = (
  title: string,
  description: string,
  type: 'portfolio' | 'article' | 'blog' = 'portfolio'
): string => {
  const params = new URLSearchParams({
    title: title.substring(0, 100), // Limit length
    description: description.substring(0, 200), // Limit length
    type
  });

  return `https://www.millat.tech/api/og-image.html?${params.toString()}`;
};

/**
 * Preload critical social images
 */
export const preloadSocialImages = (): void => {
  const images = [
    generateSocialImageURL('MD MILLAT HOSEN', 'Expert Full Stack Developer & AI Researcher', 'portfolio'),
    generateSocialImageURL('Blog & Insights', 'Web development and AI research articles', 'blog')
  ];

  images.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

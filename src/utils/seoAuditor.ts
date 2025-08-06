// Comprehensive SEO audit utility for the entire website
// Provides detailed analysis and recommendations

import { validateAltText } from './altTextManager';

export interface SEOAuditResult {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  metrics: SEOMetrics;
}

export interface SEOIssue {
  type: 'critical' | 'warning' | 'info';
  category: string;
  description: string;
  element?: string;
  recommendation: string;
}

export interface SEORecommendation {
  priority: 'high' | 'medium' | 'low';
  category: string;
  title: string;
  description: string;
  implementation: string;
}

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  imageCount: number;
  imagesWithoutAlt: number;
  internalLinks: number;
  externalLinks: number;
  headingStructure: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  socialMetaTags: number;
  structuredData: boolean;
  canonicalUrl: boolean;
  viewportMeta: boolean;
  pageLoadTime?: number;
  contentAnalysis: {
    wordCount: number;
    readingTime: number;
    topicClusters: string[];
    semanticKeywords: string[];
    contextualLinks: number;
    expertiseIndicators: number;
  };
  linkBuilding: {
    relatedArticles: number;
    categoryLinks: number;
    authorityLinks: number;
    topicalRelevance: number;
  };
}

/**
 * Comprehensive SEO audit for the current page
 */
export class SEOAuditor {
  private issues: SEOIssue[] = [];
  private recommendations: SEORecommendation[] = [];
  private metrics: SEOMetrics = {
    titleLength: 0,
    descriptionLength: 0,
    imageCount: 0,
    imagesWithoutAlt: 0,
    internalLinks: 0,
    externalLinks: 0,
    headingStructure: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
    socialMetaTags: 0,
    structuredData: false,
    canonicalUrl: false,
    viewportMeta: false,
    contentAnalysis: {
      wordCount: 0,
      readingTime: 0,
      topicClusters: [],
      semanticKeywords: [],
      contextualLinks: 0,
      expertiseIndicators: 0
    },
    linkBuilding: {
      relatedArticles: 0,
      categoryLinks: 0,
      authorityLinks: 0,
      topicalRelevance: 0
    }
  };

  /**
   * Run complete SEO audit
   */
  audit(): SEOAuditResult {
    this.issues = [];
    this.recommendations = [];
    
    // Reset metrics
    this.metrics = {
      titleLength: 0,
      descriptionLength: 0,
      imageCount: 0,
      imagesWithoutAlt: 0,
      internalLinks: 0,
      externalLinks: 0,
      headingStructure: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      socialMetaTags: 0,
      structuredData: false,
      canonicalUrl: false,
      viewportMeta: false,
      contentAnalysis: {
        wordCount: 0,
        readingTime: 0,
        topicClusters: [],
        semanticKeywords: [],
        contextualLinks: 0,
        expertiseIndicators: 0
      },
      linkBuilding: {
        relatedArticles: 0,
        categoryLinks: 0,
        authorityLinks: 0,
        topicalRelevance: 0
      }
    };

    // Run individual audits
    this.auditTitle();
    this.auditMetaDescription();
    this.auditImages();
    this.auditHeadingStructure();
    this.auditLinks();
    this.auditSocialMetaTags();
    this.auditStructuredData();
    this.auditTechnicalSEO();
    this.auditMobileOptimization();
    this.auditPerformance();
    this.auditContentQuality();
    this.auditInternalLinking();
    this.auditTopicalRelevance();

    const score = this.calculateScore();
    const grade = this.calculateGrade(score);

    return {
      score,
      grade,
      issues: this.issues,
      recommendations: this.recommendations,
      metrics: this.metrics
    };
  }

  /**
   * Audit page title
   */
  private auditTitle(): void {
    const title = document.title;
    this.metrics.titleLength = title.length;

    if (!title || title.length === 0) {
      this.addIssue('critical', 'Title', 'Page has no title', '<title>', 'Add a descriptive page title');
    } else if (title.length < 30) {
      this.addIssue('warning', 'Title', 'Title is too short', '<title>', 'Expand title to 30-60 characters');
    } else if (title.length > 60) {
      this.addIssue('warning', 'Title', 'Title is too long', '<title>', 'Shorten title to under 60 characters');
    }

    // Check for duplicate titles (basic check)
    if (title === 'React App' || title === 'Vite + React + TS') {
      this.addIssue('critical', 'Title', 'Using default framework title', '<title>', 'Replace with custom, descriptive title');
    }
  }

  /**
   * Audit meta description
   */
  private auditMetaDescription(): void {
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = metaDesc?.getAttribute('content') || '';
    this.metrics.descriptionLength = content.length;

    if (!metaDesc || content.length === 0) {
      this.addIssue('critical', 'Meta Description', 'Page has no meta description', 'meta[name="description"]', 'Add a compelling meta description');
    } else if (content.length < 120) {
      this.addIssue('warning', 'Meta Description', 'Meta description is too short', 'meta[name="description"]', 'Expand to 120-160 characters');
    } else if (content.length > 160) {
      this.addIssue('warning', 'Meta Description', 'Meta description is too long', 'meta[name="description"]', 'Shorten to under 160 characters');
    }
  }

  /**
   * Audit images
   */
  private auditImages(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imageCount = images.length;

    images.forEach((img, index) => {
      const alt = img.getAttribute('alt') || '';
      const src = img.getAttribute('src') || '';

      if (!alt) {
        this.metrics.imagesWithoutAlt++;
        this.addIssue('warning', 'Images', 'Image missing alt text', `img[src="${src}"]`, 'Add descriptive alt text');
      } else {
        const validation = validateAltText(alt);
        if (!validation.isValid) {
          this.addIssue('info', 'Images', `Image has poor alt text: "${alt}"`, `img[src="${src}"]`, validation.suggestions.join(', '));
        }
      }

      // Check for missing dimensions
      if (!img.width || !img.height) {
        this.addIssue('info', 'Images', 'Image missing dimensions (affects CLS)', `img[src="${src}"]`, 'Add width and height attributes');
      }

      // Check for loading attribute
      if (!img.getAttribute('loading') && index > 2) {
        this.addIssue('info', 'Performance', 'Image should use lazy loading', `img[src="${src}"]`, 'Add loading="lazy" attribute');
      }
    });
  }

  /**
   * Audit heading structure
   */
  private auditHeadingStructure(): void {
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
      const count = document.querySelectorAll(tag).length;
      this.metrics.headingStructure[tag as keyof typeof this.metrics.headingStructure] = count;
    });

    // Check H1 usage
    if (this.metrics.headingStructure.h1 === 0) {
      this.addIssue('critical', 'Heading Structure', 'Page has no H1 heading', 'h1', 'Add a descriptive H1 heading');
    } else if (this.metrics.headingStructure.h1 > 1) {
      this.addIssue('warning', 'Heading Structure', 'Page has multiple H1 headings', 'h1', 'Use only one H1 per page');
    }

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        this.addIssue('info', 'Heading Structure', 'Heading hierarchy is not logical', heading.tagName.toLowerCase(), 'Maintain proper heading order (don\'t skip levels)');
      }
      lastLevel = level;
    });
  }

  /**
   * Audit internal and external links
   */
  private auditLinks(): void {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      
      if (href.startsWith('http') && !href.includes('millat.tech')) {
        this.metrics.externalLinks++;
        
        // Check for external link attributes
        if (!link.getAttribute('target') || !link.getAttribute('rel')) {
          this.addIssue('info', 'Links', 'External link missing security attributes', `a[href="${href}"]`, 'Add target="_blank" rel="noopener noreferrer"');
        }
      } else if (href.startsWith('/') || href.startsWith('#') || href.includes('millat.tech')) {
        this.metrics.internalLinks++;
      }
    });

    // Recommendations for link building
    if (this.metrics.internalLinks < 3) {
      this.addRecommendation('medium', 'Content', 'Add more internal links', 'Improve internal linking to help with SEO and user navigation', 'Add contextual links to related pages and articles');
    }
  }

  /**
   * Audit social media meta tags
   */
  private auditSocialMetaTags(): void {
    const socialTags = [
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:image"]',
      'meta[property="og:url"]',
      'meta[name="twitter:card"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]'
    ];

    socialTags.forEach(selector => {
      if (document.querySelector(selector)) {
        this.metrics.socialMetaTags++;
      }
    });

    if (this.metrics.socialMetaTags < 4) {
      this.addIssue('warning', 'Social Media', 'Missing essential social media meta tags', 'meta[property^="og:"], meta[name^="twitter:"]', 'Add Open Graph and Twitter Card meta tags');
    }

    // Check for social image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      this.addIssue('warning', 'Social Media', 'Missing Open Graph image', 'meta[property="og:image"]', 'Add social media image for better sharing');
    }
  }

  /**
   * Audit structured data
   */
  private auditStructuredData(): void {
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    this.metrics.structuredData = !!structuredData;

    if (!structuredData) {
      this.addRecommendation('medium', 'Structured Data', 'Add structured data markup', 'Help search engines understand your content better', 'Implement JSON-LD structured data for Person, Organization, or Article');
    } else {
      try {
        const data = JSON.parse(structuredData.textContent || '');
        if (!data['@context'] || !data['@type']) {
          this.addIssue('warning', 'Structured Data', 'Invalid structured data format', 'script[type="application/ld+json"]', 'Ensure structured data has @context and @type');
        }
      } catch (e) {
        this.addIssue('warning', 'Structured Data', 'Malformed JSON in structured data', 'script[type="application/ld+json"]', 'Fix JSON syntax errors');
      }
    }
  }

  /**
   * Audit technical SEO elements
   */
  private auditTechnicalSEO(): void {
    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    this.metrics.canonicalUrl = !!canonical;
    
    if (!canonical) {
      this.addRecommendation('low', 'Technical SEO', 'Add canonical URL', 'Prevent duplicate content issues', 'Add canonical link tag to specify preferred URL');
    }

    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    this.metrics.viewportMeta = !!viewport;
    
    if (!viewport) {
      this.addIssue('critical', 'Mobile', 'Missing viewport meta tag', 'meta[name="viewport"]', 'Add viewport meta tag for mobile optimization');
    }

    // Check robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      this.addRecommendation('low', 'Technical SEO', 'Add robots meta tag', 'Control search engine indexing', 'Add robots meta tag to specify indexing preferences');
    }

    // Check for HTTPS
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      this.addIssue('critical', 'Security', 'Site not using HTTPS', 'URL protocol', 'Implement SSL certificate and redirect HTTP to HTTPS');
    }
  }

  /**
   * Audit mobile optimization
   */
  private auditMobileOptimization(): void {
    // Check for responsive design indicators
    const hasResponsiveCSS = document.querySelector('meta[name="viewport"]');
    if (!hasResponsiveCSS) {
      this.addIssue('critical', 'Mobile', 'Not mobile optimized', 'meta[name="viewport"]', 'Implement responsive design');
    }

    // Check for touch-friendly elements
    const buttons = document.querySelectorAll('button, a');
    let smallButtons = 0;
    
    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      if (rect.height < 44 || rect.width < 44) {
        smallButtons++;
      }
    });

    if (smallButtons > 0) {
      this.addRecommendation('medium', 'Mobile UX', 'Improve touch targets', 'Ensure buttons and links are at least 44px', 'Increase size of interactive elements for better mobile experience');
    }
  }

  /**
   * Audit performance factors
   */
  private auditPerformance(): void {
    // Check for performance hints
    const preloads = document.querySelectorAll('link[rel="preload"]');
    const prefetches = document.querySelectorAll('link[rel="prefetch"]');
    
    if (preloads.length === 0 && prefetches.length === 0) {
      this.addRecommendation('low', 'Performance', 'Add resource hints', 'Improve loading performance', 'Consider adding preload/prefetch for critical resources');
    }

    // Check for large images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
        this.addRecommendation('medium', 'Performance', 'Optimize large images', 'Reduce image file sizes', 'Compress and resize images for web');
      }
    });

    // Check for unused CSS/JS (basic check)
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    const scripts = document.querySelectorAll('script[src]');
    
    if (stylesheets.length > 5) {
      this.addRecommendation('low', 'Performance', 'Consider CSS optimization', 'Reduce number of CSS files', 'Combine and minify CSS files');
    }
    
    if (scripts.length > 10) {
      this.addRecommendation('low', 'Performance', 'Consider JS optimization', 'Reduce number of script files', 'Combine and minify JavaScript files');
    }
  }

  /**
   * Audit content quality and semantic SEO
   */
  private auditContentQuality(): void {
    const textContent = document.body.innerText || '';
    const words = textContent.split(/\s+/).filter(word => word.length > 3);
    this.metrics.contentAnalysis.wordCount = words.length;
    this.metrics.contentAnalysis.readingTime = Math.ceil(words.length / 200); // Average reading speed

    // Content quality checks
    if (words.length < 300) {
      this.addIssue('warning', 'Content Quality', 'Content is too short for SEO', 'body', 'Add more comprehensive content (minimum 300 words)');
    } else if (words.length > 2000) {
      this.addRecommendation('low', 'Content Quality', 'Consider content structure', 'Long content may benefit from better organization', 'Use headings, lists, and sections to improve readability');
    }

    // Analyze semantic keywords from your articles
    const semanticKeywords = [
      'ai', 'artificial intelligence', 'machine learning', 'studyabroadgpt', 'lora fine-tuning',
      'educational technology', 'digital marketing', 'seo strategy', 'mobile development',
      'entrepreneurship', 'startup', 'bangladesh', 'international education', 'vpn app',
      'react', 'typescript', 'nodejs', 'full stack developer', 'ai research'
    ];

    const foundKeywords = semanticKeywords.filter(keyword => 
      textContent.toLowerCase().includes(keyword.toLowerCase())
    );
    
    this.metrics.contentAnalysis.semanticKeywords = foundKeywords;

    // Topic clustering analysis
    const topicClusters = {
      'AI & Research': ['ai', 'artificial intelligence', 'machine learning', 'studyabroadgpt', 'lora', 'research'],
      'Educational Technology': ['educational technology', 'international education', 'study abroad', 'education'],
      'Digital Marketing': ['digital marketing', 'seo', 'content strategy', 'social media'],
      'Development': ['react', 'typescript', 'nodejs', 'mobile development', 'full stack'],
      'Entrepreneurship': ['startup', 'entrepreneurship', 'business', 'vpn app', 'codestbd']
    };

    const detectedClusters = Object.keys(topicClusters).filter(cluster =>
      topicClusters[cluster].some(keyword => 
        textContent.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    this.metrics.contentAnalysis.topicClusters = detectedClusters;

    // Expertise indicators
    const expertiseSignals = [
      'research', 'published', 'developed', 'built', 'implemented', 'founded',
      'experience', 'worked on', 'specialized in', 'expert in', 'years of'
    ];

    this.metrics.contentAnalysis.expertiseIndicators = expertiseSignals.filter(signal =>
      textContent.toLowerCase().includes(signal.toLowerCase())
    ).length;

    // Content recommendations
    if (foundKeywords.length < 3) {
      this.addRecommendation('medium', 'Content SEO', 'Add more relevant keywords', 
        'Include more domain-specific terminology', 
        'Naturally incorporate keywords related to AI, education, and development');
    }

    if (detectedClusters.length === 0) {
      this.addRecommendation('high', 'Content Focus', 'Establish topical authority', 
        'Content should focus on specific topic clusters', 
        'Create content around AI, educational technology, or development themes');
    }
  }

  /**
   * Advanced internal linking analysis
   */
  private auditInternalLinking(): void {
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"], a[href*="millat.tech"]');
    
    // Analyze contextual linking
    let contextualLinks = 0;
    const linkTexts = [];
    
    internalLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkText = link.textContent?.trim() || '';
      linkTexts.push(linkText);
      
      // Check for contextual linking (links within content paragraphs)
      const parentP = link.closest('p, li, td');
      if (parentP) {
        contextualLinks++;
      }
      
      // Analyze link relationships
      if (href.includes('/blog/')) {
        this.metrics.linkBuilding.relatedArticles++;
      }
      
      // Category-based linking
      const categories = ['ai', 'education', 'development', 'marketing', 'entrepreneurship'];
      if (categories.some(cat => href.toLowerCase().includes(cat) || linkText.toLowerCase().includes(cat))) {
        this.metrics.linkBuilding.categoryLinks++;
      }
    });
    
    this.metrics.contentAnalysis.contextualLinks = contextualLinks;
    
    // Link building recommendations
    if (contextualLinks < 2) {
      this.addRecommendation('high', 'Internal Linking', 'Add contextual internal links', 
        'Improve page authority and user navigation', 
        'Add 2-3 contextual links to related articles within content paragraphs');
    }
    
    if (this.metrics.linkBuilding.relatedArticles < 1) {
      this.addRecommendation('medium', 'Content Strategy', 'Link to related articles', 
        'Build topical clusters and improve page authority', 
        'Add links to related blog posts and articles');
    }

    // Analyze anchor text diversity
    const uniqueLinkTexts = [...new Set(linkTexts)];
    if (linkTexts.length > 0 && uniqueLinkTexts.length / linkTexts.length < 0.7) {
      this.addRecommendation('low', 'Link Optimization', 'Diversify anchor text', 
        'Avoid over-optimization and improve natural link patterns', 
        'Use varied, descriptive anchor text for internal links');
    }

    // Authority building through strategic linking
    const authorityPages = ['/about', '/projects', '/experience', '/contact'];
    const authorityLinksCount = Array.from(internalLinks).filter(link => 
      authorityPages.some(page => link.getAttribute('href')?.includes(page))
    ).length;
    
    this.metrics.linkBuilding.authorityLinks = authorityLinksCount;
    
    if (authorityLinksCount < 2) {
      this.addRecommendation('medium', 'Authority Building', 'Link to key pages', 
        'Strengthen important pages through internal linking', 
        'Add links to About, Projects, and Experience pages to build page authority');
    }
  }

  /**
   * Audit topical relevance and E-A-T signals
   */
  private auditTopicalRelevance(): void {
    const currentPath = window.location.pathname;
    const pageContent = document.body.innerText.toLowerCase();
    
    // Analyze E-A-T (Expertise, Authoritativeness, Trustworthiness) signals
    const expertiseSignals = [
      'md millat hosen', 'research', 'published', 'developer', 'ai researcher',
      'full stack developer', 'founded', 'built', 'developed', 'specializes in'
    ];
    
    const authoritySignals = [
      'sharda university', 'international relations', 'codestbd inc', 'published research',
      'conference', 'github', 'open source', 'years of experience'
    ];
    
    const trustSignals = [
      'contact', 'email', 'linkedin', 'github', 'portfolio', 'resume',
      'case study', 'real world', 'practical experience'
    ];
    
    const allSignals = [...expertiseSignals, ...authoritySignals, ...trustSignals];
    const foundSignals = allSignals.filter(signal => pageContent.includes(signal.toLowerCase()));
    
    this.metrics.linkBuilding.topicalRelevance = foundSignals.length;
    
    // Page-specific recommendations
    if (currentPath.includes('/blog/')) {
      // Blog post specific recommendations
      if (!pageContent.includes('md millat hosen')) {
        this.addRecommendation('medium', 'Author Authority', 'Include author information', 
          'Build E-A-T signals for better rankings', 
          'Add author bio and credentials to establish expertise');
      }
      
      if (!pageContent.includes('related') && !pageContent.includes('similar')) {
        this.addRecommendation('high', 'Content Clustering', 'Add related content sections', 
          'Improve topical authority and user engagement', 
          'Include "Related Articles" or "You might also like" sections');
      }
    }
    
    // Schema markup for expertise
    const personSchema = document.querySelector('script[type="application/ld+json"]');
    if (personSchema) {
      try {
        const schema = JSON.parse(personSchema.textContent || '');
        if (schema['@type'] === 'Person' && !schema.jobTitle) {
          this.addRecommendation('medium', 'Structured Data', 'Enhance Person schema', 
            'Add job title and expertise areas to schema markup', 
            'Include jobTitle, worksFor, and expertise fields in Person schema');
        }
      } catch (e) {
        // Schema parsing handled elsewhere
      }
    }
    
    // Breadcrumb navigation for topic clustering
    const breadcrumbs = document.querySelector('nav[aria-label="breadcrumb"], .breadcrumb');
    if (!breadcrumbs && currentPath.includes('/blog/')) {
      this.addRecommendation('medium', 'Navigation', 'Add breadcrumb navigation', 
        'Improve topical hierarchy and user experience', 
        'Implement breadcrumb navigation to show content relationships');
    }
    
    // Related content recommendations
    if (foundSignals.length < 5) {
      this.addRecommendation('high', 'E-A-T Signals', 'Strengthen expertise indicators', 
        'Improve content authority and trust signals', 
        'Add more specific expertise details, credentials, and real-world examples');
    }
  }

  /**
   * Calculate overall SEO score
   */
  private calculateScore(): number {
    const criticalIssues = this.issues.filter(issue => issue.type === 'critical').length;
    const warningIssues = this.issues.filter(issue => issue.type === 'warning').length;
    const infoIssues = this.issues.filter(issue => issue.type === 'info').length;

    // Start with perfect score
    let score = 100;

    // Deduct points for issues
    score -= criticalIssues * 20; // Critical issues: -20 points each
    score -= warningIssues * 10;  // Warning issues: -10 points each
    score -= infoIssues * 5;      // Info issues: -5 points each

    // Bonus points for good practices
    if (this.metrics.structuredData) score += 5;
    if (this.metrics.socialMetaTags >= 6) score += 5;
    if (this.metrics.canonicalUrl) score += 2;
    if (this.metrics.imagesWithoutAlt === 0 && this.metrics.imageCount > 0) score += 3;

    // New bonus points for content quality and link building
    if (this.metrics.contentAnalysis.wordCount >= 300) score += 3;
    if (this.metrics.contentAnalysis.semanticKeywords.length >= 5) score += 5;
    if (this.metrics.contentAnalysis.topicClusters.length >= 2) score += 5;
    if (this.metrics.contentAnalysis.contextualLinks >= 3) score += 5;
    if (this.metrics.contentAnalysis.expertiseIndicators >= 3) score += 3;
    
    if (this.metrics.linkBuilding.relatedArticles >= 2) score += 3;
    if (this.metrics.linkBuilding.categoryLinks >= 3) score += 3;
    if (this.metrics.linkBuilding.authorityLinks >= 2) score += 2;
    if (this.metrics.linkBuilding.topicalRelevance >= 5) score += 5;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Calculate letter grade based on score
   */
  private calculateGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  /**
   * Add an issue to the audit results
   */
  private addIssue(type: 'critical' | 'warning' | 'info', category: string, description: string, element: string, recommendation: string): void {
    this.issues.push({
      type,
      category,
      description,
      element,
      recommendation
    });
  }

  /**
   * Add a recommendation to the audit results
   */
  private addRecommendation(priority: 'high' | 'medium' | 'low', category: string, title: string, description: string, implementation: string): void {
    this.recommendations.push({
      priority,
      category,
      title,
      description,
      implementation
    });
  }
}

/**
 * Quick SEO audit function
 */
export const runSEOAudit = (): SEOAuditResult => {
  const auditor = new SEOAuditor();
  return auditor.audit();
};

/**
 * Generate SEO audit report
 */
export const generateSEOReport = (auditResult: SEOAuditResult): string => {
  const { score, grade, issues, recommendations, metrics } = auditResult;

  const report = `
# SEO Audit Report

## Overall Score: ${score}/100 (Grade: ${grade})

## Metrics
- Title Length: ${metrics.titleLength} characters
- Description Length: ${metrics.descriptionLength} characters
- Images: ${metrics.imageCount} total, ${metrics.imagesWithoutAlt} without alt text
- Links: ${metrics.internalLinks} internal, ${metrics.externalLinks} external
- Headings: H1(${metrics.headingStructure.h1}) H2(${metrics.headingStructure.h2}) H3(${metrics.headingStructure.h3})
- Social Meta Tags: ${metrics.socialMetaTags}/8
- Structured Data: ${metrics.structuredData ? 'Yes' : 'No'}
- Canonical URL: ${metrics.canonicalUrl ? 'Yes' : 'No'}

## Content Analysis
- Word Count: ${metrics.contentAnalysis.wordCount} words
- Reading Time: ${metrics.contentAnalysis.readingTime} minutes
- Topic Clusters: ${metrics.contentAnalysis.topicClusters.join(', ') || 'None detected'}
- Semantic Keywords: ${metrics.contentAnalysis.semanticKeywords.slice(0, 10).join(', ')}
- Contextual Links: ${metrics.contentAnalysis.contextualLinks}
- Expertise Indicators: ${metrics.contentAnalysis.expertiseIndicators}

## Link Building Analysis
- Related Articles Linked: ${metrics.linkBuilding.relatedArticles}
- Category-Based Links: ${metrics.linkBuilding.categoryLinks}
- Authority Page Links: ${metrics.linkBuilding.authorityLinks}
- Topical Relevance Score: ${metrics.linkBuilding.topicalRelevance}

## Issues Found (${issues.length})

${issues.map(issue => `
### ${issue.type.toUpperCase()}: ${issue.category}
- **Problem**: ${issue.description}
- **Element**: ${issue.element}
- **Solution**: ${issue.recommendation}
`).join('\n')}

## Recommendations (${recommendations.length})

${recommendations.map(rec => `
### ${rec.priority.toUpperCase()}: ${rec.title}
- **Category**: ${rec.category}
- **Description**: ${rec.description}
- **Implementation**: ${rec.implementation}
`).join('\n')}

---
Generated on ${new Date().toISOString()}
  `;

  return report.trim();
};

// Export singleton instance
export const seoAuditor = new SEOAuditor();

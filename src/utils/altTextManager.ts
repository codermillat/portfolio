// Alt text management system for better accessibility and SEO
// Ensures all images have proper, descriptive alt text

export interface ImageMetadata {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
}

/**
 * Image alt text templates for different contexts
 */
export const altTextTemplates = {
  article: {
    hero: (title: string) => `Featured image for article: ${title}`,
    illustration: (title: string, context: string) => `${context} illustration for ${title}`,
    diagram: (title: string, diagramType: string) => `${diagramType} diagram showing ${title}`,
    screenshot: (title: string, app: string) => `Screenshot of ${app} showing ${title}`,
    code: (title: string, language: string) => `${language} code example for ${title}`,
  },
  portfolio: {
    project: (projectName: string) => `Screenshot of ${projectName} project by MD MILLAT HOSEN`,
    logo: (companyName: string) => `${companyName} logo`,
    technology: (techName: string) => `${techName} technology icon`,
    avatar: () => 'Profile photo of MD MILLAT HOSEN - Full Stack Developer',
  },
  blog: {
    author: () => 'Author profile picture of MD MILLAT HOSEN',
    category: (category: string) => `${category} category icon`,
    featured: (title: string) => `Featured image for blog post: ${title}`,
  }
};

/**
 * Generate contextual alt text for images
 */
export const generateAltText = (
  imageType: keyof typeof altTextTemplates,
  subType: string,
  context: string,
  additionalInfo?: string
): string => {
  const template = altTextTemplates[imageType];
  
  if (!template || typeof template[subType as keyof typeof template] !== 'function') {
    return `${context}${additionalInfo ? ` - ${additionalInfo}` : ''}`;
  }

  const generator = template[subType as keyof typeof template] as Function;
  return generator(context, additionalInfo);
};

/**
 * Validate and improve existing alt text
 */
export const validateAltText = (alt: string, context?: string): {
  isValid: boolean;
  score: number;
  suggestions: string[];
  improved?: string;
} => {
  const suggestions: string[] = [];
  let score = 100;

  // Check for empty alt text
  if (!alt || alt.trim() === '') {
    return {
      isValid: false,
      score: 0,
      suggestions: ['Add descriptive alt text'],
      improved: context ? `Illustration for ${context}` : 'Descriptive image'
    };
  }

  // Check for generic alt text
  const genericTerms = ['image', 'picture', 'photo', 'img', 'graphic', 'banner'];
  if (genericTerms.some(term => alt.toLowerCase() === term)) {
    score -= 50;
    suggestions.push('Alt text is too generic - be more specific');
  }

  // Check length
  if (alt.length < 10) {
    score -= 20;
    suggestions.push('Alt text might be too short - add more detail');
  } else if (alt.length > 125) {
    score -= 10;
    suggestions.push('Alt text is quite long - consider shortening');
  }

  // Check for redundant phrases
  const redundantPhrases = ['image of', 'picture of', 'photo of', 'graphic of'];
  if (redundantPhrases.some(phrase => alt.toLowerCase().includes(phrase))) {
    score -= 10;
    suggestions.push('Remove redundant phrases like "image of" or "picture of"');
  }

  // Check for good practices
  if (alt.includes('alt text') || alt.includes('alternative text')) {
    score -= 30;
    suggestions.push('Alt text should describe the image content, not reference itself');
  }

  return {
    isValid: score >= 70,
    score,
    suggestions,
    improved: suggestions.length > 0 ? improveAltText(alt, context) : undefined
  };
};

/**
 * Automatically improve alt text based on common issues
 */
const improveAltText = (alt: string, context?: string): string => {
  let improved = alt;

  // Remove redundant phrases
  const redundantPhrases = ['image of', 'picture of', 'photo of', 'graphic of'];
  redundantPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\s+`, 'gi');
    improved = improved.replace(regex, '');
  });

  // Capitalize first letter
  improved = improved.charAt(0).toUpperCase() + improved.slice(1);

  // Add context if too short and context is available
  if (improved.length < 15 && context) {
    improved = `${improved} - ${context}`;
  }

  return improved.trim();
};

/**
 * Extract images from HTML content and validate their alt text
 */
export const auditImagesInContent = (htmlContent: string, context?: string): {
  totalImages: number;
  validImages: number;
  issues: Array<{
    src: string;
    alt: string;
    issues: string[];
    suggestions: string[];
  }>;
} => {
  const imgRegex = /<img[^>]+>/gi;
  const images = htmlContent.match(imgRegex) || [];
  
  const issues: Array<{
    src: string;
    alt: string;
    issues: string[];
    suggestions: string[];
  }> = [];

  let validImages = 0;

  images.forEach(imgTag => {
    const srcMatch = imgTag.match(/src="([^"]+)"/i);
    const altMatch = imgTag.match(/alt="([^"]*)"/i);
    
    const src = srcMatch ? srcMatch[1] : 'unknown';
    const alt = altMatch ? altMatch[1] : '';
    
    const validation = validateAltText(alt, context);
    
    if (validation.isValid) {
      validImages++;
    } else {
      issues.push({
        src,
        alt,
        issues: validation.suggestions,
        suggestions: validation.improved ? [validation.improved] : []
      });
    }
  });

  return {
    totalImages: images.length,
    validImages,
    issues
  };
};

/**
 * Generate structured data for images
 */
export const generateImageStructuredData = (images: ImageMetadata[]): any => {
  return images.map(img => ({
    "@type": "ImageObject",
    "url": img.src,
    "name": img.title || img.alt,
    "description": img.description || img.alt,
    "keywords": img.tags?.join(', '),
    "contentCategory": img.category
  }));
};

/**
 * Common image categories for the portfolio
 */
export const imageCategories = {
  portfolio: [
    'project-screenshot',
    'technology-logo',
    'process-diagram',
    'result-showcase',
    'team-photo'
  ],
  blog: [
    'featured-image',
    'tutorial-screenshot',
    'code-example',
    'infographic',
    'comparison-chart'
  ],
  about: [
    'profile-photo',
    'workspace-photo',
    'achievement-certificate',
    'event-photo',
    'skill-visualization'
  ]
};

/**
 * Generate comprehensive image metadata
 */
export const generateImageMetadata = (
  src: string,
  title: string,
  category: string,
  tags: string[] = [],
  customAlt?: string
): ImageMetadata => {
  const categoryType = Object.keys(imageCategories).find(key =>
    imageCategories[key as keyof typeof imageCategories].includes(category)
  ) as keyof typeof imageCategories;

  const alt = customAlt || generateAltText(
    (categoryType === 'about' ? 'portfolio' : categoryType) || 'portfolio',
    category.split('-')[0],
    title
  );

  return {
    src,
    alt,
    title,
    description: `${category.replace('-', ' ')} for ${title}`,
    category: categoryType,
    tags
  };
};

/**
 * Export utility functions for common image types
 */
export const imageHelpers = {
  projectScreenshot: (projectName: string, description: string) =>
    generateImageMetadata(
      `/images/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      projectName,
      'project-screenshot',
      ['project', 'portfolio', projectName.toLowerCase()],
      `${projectName} project screenshot showing ${description}`
    ),

  blogFeaturedImage: (articleTitle: string, topic: string) =>
    generateImageMetadata(
      `/images/blog/${articleTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      articleTitle,
      'featured-image',
      ['blog', 'article', topic.toLowerCase()],
      `Featured image for blog post: ${articleTitle}`
    ),

  technologyIcon: (techName: string) =>
    generateImageMetadata(
      `/images/tech/${techName.toLowerCase()}.svg`,
      techName,
      'technology-logo',
      ['technology', 'skill', techName.toLowerCase()],
      `${techName} technology logo`
    )
};

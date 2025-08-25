// Simple frontmatter parser for browser environment
interface FrontmatterData {
  [key: string]: string | boolean | string[];
}

const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: content.trim() };
  }
  
  const [, frontmatter, markdown] = match;
  const data: FrontmatterData = {};
  
  // Parse YAML-like frontmatter
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map(item => item.trim().replace(/"/g, '').replace(/'/g, ''));
      }
      // Parse booleans
      else if (value === 'true') {
        data[key] = true;
      }
      else if (value === 'false') {
        data[key] = false;
      }
      else {
        data[key] = value;
      }
    }
  });
  
  return { data, content: markdown.trim() };
};

export interface ArticleMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  featured: boolean;
  excerpt: string;
  gradient: string;
}

export interface Article {
  slug: string;
  metadata: ArticleMetadata;
  content: string;
}

export const loadArticles = async (): Promise<Article[]> => {
  
  try {
    
    // Import markdown files directly with ?raw suffix
    const articles: Article[] = [];
    
    try {
      
      // Import article content with dynamic imports for better code splitting
const [
  wordpressContent,
  cssContent,
  reactContent,
  nodejsContent,
  bangladeshIndiaContent,
  aiSolutionsContent,
  eduTechContent,
  entrepreneurshipContent,
  culturalAIContent,
  loraGuideContent,
  digitalMarketingContent,
  openSourceContent,
  psychologyContent,
  researchProductContent,
  studyabroadgptCulturalContent,
  syntheticDataContent,
  setforgeContent,
  vpnAppContent,
  edupathAIContent,
  islamicGuidanceContent,
  aiEdtechMarketGapContent
] = await Promise.all([
  import('../articles/building-studyabroadgpt-ai-educational-guidance.md?raw'),
  import('../articles/lora-fine-tuning-beginners-resource-constrained-ai.md?raw'),
  import('../articles/future-ai-education-personalized-learning.md?raw'),
  import('../articles/edupath-ai-platform-research-to-product.md?raw'),
  import('../articles/from-bangladesh-to-india-international-student-ai-researcher.md?raw'),
  import('../articles/building-ai-solutions-resource-constrained-environments.md?raw'),
  import('../articles/future-educational-technology-ai-democratizing-education.md?raw'),
  import('../articles/entrepreneurship-tech-lessons-codestbd-premium-vpn.md?raw'),
  import('../articles/cultural-intelligence-ai-building-systems-local-contexts.md?raw'),
  import('../articles/complete-guide-lora-fine-tuning-accessible-llms.md?raw'),
  import('../articles/digital-marketing-ai-seo-content-strategy-educational-technology.md?raw'),
  import('../articles/open-source-ai-contributing-global-ai-community.md?raw'),
  import('../articles/psychology-solitude-introversion-innovation-technology.md?raw'),
  import('../articles/research-product-complete-journey-ai-powered-educational-tools.md?raw'),
  import('../articles/studyabroadgpt-cultural-context-ai-education.md?raw'),
  import('../articles/creating-high-quality-synthetic-datasets-ecommerce-orders.md?raw'),
  import('../articles/setforge-sophisticated-qa-generation-educational-content.md?raw'),
  import('../articles/idea-to-appstore-premium-vpn-application-development.md?raw'),
  import('../articles/edupath-ai-revolutionizing-educational-guidance-ai-personalization.md?raw'),
  import('../articles/dangers-chatgpt-islamic-guidance-ai-research-perspective.md?raw'),
  import('../articles/ai-edtech-market-gap-developing-countries.md?raw')
]);
      
      
      // Process each article
      const processArticle = (slug: string, rawContent: string) => {
        const { data, content: markdownContent } = parseFrontmatter(rawContent);
        return {
          slug,
          metadata: data as unknown as ArticleMetadata,
          content: markdownContent
        };
      };

      articles.push(processArticle('building-studyabroadgpt-ai-educational-guidance', wordpressContent.default));
      articles.push(processArticle('lora-fine-tuning-beginners-resource-constrained-ai', cssContent.default));
      articles.push(processArticle('future-ai-education-personalized-learning', reactContent.default));
      articles.push(processArticle('edupath-ai-platform-research-to-product', nodejsContent.default));
      articles.push(processArticle('from-bangladesh-to-india-international-student-ai-researcher', bangladeshIndiaContent.default));
      articles.push(processArticle('building-ai-solutions-resource-constrained-environments', aiSolutionsContent.default));
      articles.push(processArticle('future-educational-technology-ai-democratizing-education', eduTechContent.default));
      articles.push(processArticle('entrepreneurship-tech-lessons-codestbd-premium-vpn', entrepreneurshipContent.default));
      articles.push(processArticle('cultural-intelligence-ai-building-systems-local-contexts', culturalAIContent.default));
      articles.push(processArticle('complete-guide-lora-fine-tuning-accessible-llms', loraGuideContent.default));
      articles.push(processArticle('digital-marketing-ai-seo-content-strategy-educational-technology', digitalMarketingContent.default));
      articles.push(processArticle('open-source-ai-contributing-global-ai-community', openSourceContent.default));
      articles.push(processArticle('psychology-solitude-introversion-innovation-technology', psychologyContent.default));
      articles.push(processArticle('research-product-complete-journey-ai-powered-educational-tools', researchProductContent.default));
      articles.push(processArticle('studyabroadgpt-cultural-context-ai-education', studyabroadgptCulturalContent.default));
      articles.push(processArticle('creating-high-quality-synthetic-datasets-ecommerce-orders', syntheticDataContent.default));
      articles.push(processArticle('setforge-sophisticated-qa-generation-educational-content', setforgeContent.default));
      articles.push(processArticle('idea-to-appstore-premium-vpn-application-development', vpnAppContent.default));
      articles.push(processArticle('edupath-ai-revolutionizing-educational-guidance-ai-personalization', edupathAIContent.default));
      articles.push(processArticle('dangers-chatgpt-islamic-guidance-ai-research-perspective', islamicGuidanceContent.default));
      articles.push(processArticle('ai-edtech-market-gap-developing-countries', aiEdtechMarketGapContent.default));
      
    } catch (importError) {
      console.error('❌ Error importing markdown files:', importError);
      
      // Fallback to sample data if import fails
      articles.push({
        slug: 'building-studyabroadgpt-ai-educational-guidance',
        metadata: {
          title: 'Getting Started with WordPress Development: A Complete Guide',
          description: 'Learn the fundamentals of WordPress development, from setting up your environment to creating custom themes and plugins.',
          author: 'MD MILLAT HOSEN',
          date: '2025-01-28',
          tags: ['WordPress', 'Web Development', 'PHP', 'Tutorial'],
          category: 'Web Development',
          featured: true,
          excerpt: 'WordPress powers over 40% of all websites on the internet, making it one of the most popular content management systems.',
          gradient: 'from-blue-500 to-purple-600'
        },
        content: '# Getting Started with WordPress Development\n\nWordPress is a powerful content management system that powers over 40% of all websites on the internet. Whether you\'re a beginner or an experienced developer, understanding WordPress development can open up numerous opportunities.\n\n## Why Choose WordPress Development?\n\nWordPress offers several advantages for developers:\n\n- **Open Source**: Free to use and modify\n- **Large Community**: Extensive documentation and support\n- **Plugin Ecosystem**: Thousands of plugins available\n- **Theme Flexibility**: Customizable themes and templates\n- **SEO Friendly**: Built-in SEO features\n\n## Setting Up Your Development Environment\n\n### 1. Local Development Setup\n\nFirst, you\'ll need to set up a local development environment:\n\n```bash\n# Install XAMPP or similar local server\n# Download WordPress from wordpress.org\n# Set up a local database\n```\n\n### 2. Essential Tools\n\n| Tool | Purpose | Recommended Options |\n|------|---------|-------------------|\n| **Code Editor** | Writing and editing code | VS Code, Sublime Text, PHPStorm |\n| **Version Control** | Tracking changes | Git, GitHub Desktop |\n| **Browser Tools** | Debugging and testing | Chrome DevTools, Firefox Developer Tools |\n| **Database Management** | Managing WordPress database | phpMyAdmin, MySQL Workbench |\n\n## Understanding WordPress Architecture\n\nWordPress follows a modular architecture with these key components:\n\n1. **Core Files**: WordPress engine\n2. **Themes**: Visual presentation layer\n3. **Plugins**: Extended functionality\n4. **Database**: Store content and settings\n\n## Creating Your First Theme\n\n### Basic Theme Structure\n\n```php\n<?php\n/*\nTheme Name: My Custom Theme\nDescription: A custom WordPress theme\nVersion: 1.0\nAuthor: Your Name\n*/\n\n// Prevent direct access\nif (!defined(\'ABSPATH\')) {\n    exit;\n}\n```\n\n### Best Practices\n\n- Follow WordPress coding standards\n- Use proper security measures\n- Optimize for performance\n- Make themes responsive\n\n## WordPress Development Workflow\n\n| Phase | Description | Tools |\n|-------|-------------|-------|\n| **Planning** | Define requirements and structure | Figma, Adobe XD |\n| **Development** | Build themes and plugins | VS Code, Git |\n| **Testing** | Ensure functionality and security | Browser testing, security plugins |\n| **Deployment** | Launch to production | FTP, Git deployment |\n\n## Conclusion\n\nWordPress development offers endless possibilities for creating powerful websites and applications. By following best practices and continuously learning, you can build professional, scalable solutions that meet your clients\' needs.\n\n> **Pro Tip**: Always keep your development environment updated and follow WordPress coding standards for better maintainability.\n\nRemember to stay updated with WordPress core updates, security best practices, and new development techniques. The WordPress community is vast and supportive, so don\'t hesitate to seek help when needed.'
      });
    }

    // Sort articles by date (newest first)
    articles.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
    
    return articles;
  } catch (error) {
    console.error('❌ Error loading articles:', error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  const articles = await loadArticles();
  const article = articles.find(article => article.slug === slug);
  return article || null;
};

export const getFeaturedArticles = async (): Promise<Article[]> => {
  const articles = await loadArticles();
  const featured = articles.filter(article => article.metadata.featured);
  return featured;
};

export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
  const articles = await loadArticles();
  const filtered = articles.filter(article => article.metadata.category === category);
  return filtered;
};

export const getAllCategories = async (): Promise<string[]> => {
  const articles = await loadArticles();
  const categories = [...new Set(articles.map(article => article.metadata.category))];
  return categories.sort();
};

export const getAllTags = async (): Promise<string[]> => {
  const articles = await loadArticles();
  const tags = [...new Set(articles.flatMap(article => article.metadata.tags))];
  return tags.sort();
};

// Clear cache (useful for development)
export const clearArticlesCache = (): void => {
  // Cache functionality removed - articles are loaded fresh each time
};

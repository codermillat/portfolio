// Simple frontmatter parser for browser environment
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: content.trim() };
  }
  
  const [, frontmatter, markdown] = match;
  const data: any = {};
  
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

// Cache for loaded articles
let articlesCache: Article[] | null = null;

export const loadArticles = async (): Promise<Article[]> => {
  // Clear cache to ensure fresh content
  articlesCache = null;
  
  try {
    console.log('🔄 Loading markdown articles...');
    
    // Import markdown files directly with ?raw suffix
    const articles: Article[] = [];
    
    try {
      console.log('📄 Attempting to import markdown files...');
      
      // Import each markdown file statically
      const wordpressContent = await import('../articles/wordpress-development-guide.md?raw');
      console.log('✅ WordPress content loaded:', typeof wordpressContent.default, 'length:', wordpressContent.default?.length);
      
      const cssContent = await import('../articles/modern-css-techniques.md?raw');
      console.log('✅ CSS content loaded:', typeof cssContent.default, 'length:', cssContent.default?.length);
      
      const reactContent = await import('../articles/react-performance-optimization.md?raw');
      console.log('✅ React content loaded:', typeof reactContent.default, 'length:', reactContent.default?.length);
      
      const nodejsContent = await import('../articles/nodejs-backend-development.md?raw');
      console.log('✅ Node.js content loaded:', typeof nodejsContent.default, 'length:', nodejsContent.default?.length);
      
      // Process each article
      const processArticle = (slug: string, rawContent: string) => {
        console.log(`🔧 Processing article: ${slug}`);
        const { data, content: markdownContent } = parseFrontmatter(rawContent);
        console.log(`📝 Article metadata:`, data.title);
        console.log(`📄 Content length:`, markdownContent.length);
        console.log(`📅 Article date:`, data.date);
        return {
          slug,
          metadata: data as ArticleMetadata,
          content: markdownContent
        };
      };

      articles.push(processArticle('wordpress-development-guide', wordpressContent.default));
      articles.push(processArticle('modern-css-techniques', cssContent.default));
      articles.push(processArticle('react-performance-optimization', reactContent.default));
      articles.push(processArticle('nodejs-backend-development', nodejsContent.default));
      
      console.log(`✅ Successfully loaded ${articles.length} articles`);
    } catch (importError) {
      console.error('❌ Error importing markdown files:', importError);
      console.log('🔄 Falling back to sample data...');
      
      // Fallback to sample data if import fails
      articles.push({
        slug: 'wordpress-development-guide',
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
    
    console.log(`📊 Final articles count: ${articles.length}`);
    articles.forEach((article, index) => {
      console.log(`  ${index + 1}. ${article.slug}: ${article.metadata.title} (${article.content.length} chars) - Date: ${article.metadata.date}`);
    });
    
    // Cache the results
    articlesCache = articles;
    
    return articles;
  } catch (error) {
    console.error('❌ Error loading articles:', error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  console.log(`🔍 Looking for article with slug: ${slug}`);
  const articles = await loadArticles();
  const article = articles.find(article => article.slug === slug);
  console.log(`📄 Found article:`, article ? `${article.metadata.title} (Date: ${article.metadata.date})` : 'Not found');
  return article || null;
};

export const getFeaturedArticles = async (): Promise<Article[]> => {
  const articles = await loadArticles();
  const featured = articles.filter(article => article.metadata.featured);
  console.log(`⭐ Featured articles: ${featured.length}`);
  return featured;
};

export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
  const articles = await loadArticles();
  const filtered = articles.filter(article => article.metadata.category === category);
  console.log(`📂 Articles in category "${category}": ${filtered.length}`);
  return filtered;
};

export const getAllCategories = async (): Promise<string[]> => {
  const articles = await loadArticles();
  const categories = [...new Set(articles.map(article => article.metadata.category))];
  console.log(`📂 All categories:`, categories);
  return categories.sort();
};

export const getAllTags = async (): Promise<string[]> => {
  const articles = await loadArticles();
  const tags = [...new Set(articles.flatMap(article => article.metadata.tags))];
  console.log(`🏷️ All tags:`, tags);
  return tags.sort();
};

// Clear cache (useful for development)
export const clearArticlesCache = (): void => {
  console.log('🗑️ Clearing articles cache');
  articlesCache = null;
}; 
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  featured: boolean;
  content: string;
  excerpt: string;
}

// Import all blog posts with error handling
const blogPosts = import.meta.glob('./*.md', { eager: true });

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  try {
    for (const path in blogPosts) {
      const file = blogPosts[path] as any;
      const slug = path.replace('./', '').replace('.md', '');
      
      if (file && typeof file.default === 'string') {
        try {
          const { data, content } = matter(file.default);
          
          // Create excerpt from content (first 200 characters)
          const excerpt = content
            .replace(/[#*`]/g, '') // Remove markdown syntax
            .replace(/\n/g, ' ') // Replace newlines with spaces
            .substring(0, 200)
            .trim() + '...';

          posts.push({
            slug,
            title: data.title || '',
            description: data.description || '',
            author: data.author || 'MD MILLAT HOSEN',
            date: data.date || '',
            tags: data.tags || [],
            image: data.image || '/blog/default.jpg',
            featured: data.featured || false,
            content,
            excerpt
          });
        } catch (error) {
          console.warn(`Error processing blog post ${slug}:`, error);
          // Continue with other posts even if one fails
        }
      }
    }
  } catch (error) {
    console.error('Error loading blog posts:', error);
    // Return empty array if there's a critical error
    return [];
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const posts = getAllBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  try {
    const posts = getAllBlogPosts();
    return posts.filter(post => post.featured);
  } catch (error) {
    console.error('Error getting featured posts:', error);
    return [];
  }
}

export function getPostsByTag(tag: string): BlogPost[] {
  try {
    const posts = getAllBlogPosts();
    return posts.filter(post => post.tags.includes(tag));
  } catch (error) {
    console.error('Error getting posts by tag:', error);
    return [];
  }
}

export function getAllTags(): string[] {
  try {
    const posts = getAllBlogPosts();
    const tags = new Set<string>();
    
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    
    return Array.from(tags).sort();
  } catch (error) {
    console.error('Error getting all tags:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

export function getReadingTime(content: string): number {
  try {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  } catch (error) {
    console.error('Error calculating reading time:', error);
    return 1;
  }
} 
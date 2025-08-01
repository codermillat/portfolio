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

// Import all blog posts
const blogPosts = import.meta.glob('./*.md', { eager: true });

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in blogPosts) {
    const file = blogPosts[path] as any;
    const slug = path.replace('./', '').replace('.md', '');
    
    if (file && typeof file.default === 'string') {
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
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
} 
import { BlogPost } from '../data/blogPosts';

// Template for creating new blog posts
export const createNewBlogPost = (data: Partial<BlogPost>): BlogPost => {
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

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return {
    slug: data.slug || 'new-blog-post',
    title: data.title || 'New Blog Post Title',
    description: data.description || 'A brief description of the blog post',
    author: data.author || 'MD MILLAT HOSEN',
    date: data.date || new Date().toISOString().split('T')[0],
    tags: data.tags || ['General'],
    category: data.category || 'Web Development',
    featured: data.featured || false,
    excerpt: data.excerpt || 'A short excerpt from the blog post...',
    gradient: data.gradient || randomGradient,
    content: data.content || `
# New Blog Post

This is a new blog post. Replace this content with your actual article.

## Introduction

Start your article here...

## Main Content

Add your main content here...

## Conclusion

Wrap up your article here...
    `
  };
};

// Helper function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Helper function to get reading time
export const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Categories available for blog posts
export const availableCategories = [
  'AI & Research',
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'Web Design',
  'Digital Marketing',
  'Academic Research'
];

// Common tags for blog posts
export const commonTags = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'WordPress',
  'PHP',
  'CSS',
  'HTML',
  'SEO',
  'Performance',
  'Mobile',
  'AI',
  'Machine Learning',
  'Web Development',
  'Frontend',
  'Backend',
  'Tutorial',
  'Best Practices'
]; 
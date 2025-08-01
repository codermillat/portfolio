import React from 'react';
import BlogPostComponent from './BlogPost';

interface BlogPostPageProps {
  slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  return <BlogPostComponent slug={slug} />;
};

export default BlogPostPage; 
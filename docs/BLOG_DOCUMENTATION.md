# Blog Documentation

This document provides technical documentation for the blog system implementation.

## File Structure

```
src/
├── articles/                           # Blog articles
│   ├── building-studyabroadgpt-ai-educational-guidance.md
│   ├── lora-fine-tuning-beginners-resource-constrained-ai.md
│   ├── future-ai-education-personalized-learning.md
│   └── edupath-ai-platform-research-to-product.md
├── components/
│   └── blog/
│       └── SimpleBlog.tsx             # Blog listing component
├── pages/
│   ├── BlogPage.tsx                   # Main blog page
│   └── BlogPostPage.tsx               # Individual article page
└── utils/
    ├── blogUtils.ts                   # Blog utility functions
    └── markdownLoader.ts              # Markdown file loader
```

## Article Format

Each article is a Markdown file with frontmatter metadata:

```markdown
---
title: "Article Title"
description: "SEO description"
author: "MD MILLAT HOSEN"
date: "2025-01-28"
tags: ["tag1", "tag2"]
category: "AI & Research"
featured: true
excerpt: "Article excerpt"
gradient: "from-blue-500 to-purple-600"
---

# Article Content

Article content in Markdown format...
```

## Components

### SimpleBlog.tsx

Main blog listing component that displays all articles.

### BlogPage.tsx

Page wrapper for the blog listing with routing.

### BlogPostPage.tsx

Individual article page with SEO optimization.

## Utilities

### blogUtils.ts

Contains utility functions for:
- Creating new blog posts
- Generating slugs
- Calculating reading time
- Formatting dates
- Managing categories and tags

### markdownLoader.ts

Handles loading and processing of markdown files:
- Imports markdown content
- Parses frontmatter
- Processes articles for display
- Handles errors gracefully

## SEO Features

- Meta tags for each article
- Structured data (JSON-LD)
- Sitemap integration
- Open Graph tags
- Twitter Card support

## URL Structure

- `/blog` - Main blog listing
- `/blog/[article-slug]` - Individual articles

## Categories

Available categories for articles:
- AI & Research
- Web Development
- Frontend Development
- Backend Development
- Mobile Development
- Web Design
- Digital Marketing
- Academic Research

## Tags

Common tags used across articles:
- AI, Machine Learning, Deep Learning
- React, TypeScript, JavaScript, Node.js
- Web Development, Full-stack, Frontend, Backend
- Educational Technology, Personalized Learning
- Tutorial, Best Practices, Case Study
- Research, Innovation, Technology 
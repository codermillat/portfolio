# Adding New Articles

This guide explains how to add new articles to your portfolio website using the simple markdown-based system.

## Quick Start

To add a new article, simply create a new `.md` file in the `src/articles/` directory.

## File Structure

```
src/articles/
├── wordpress-development-guide.md
├── modern-css-techniques.md
├── react-performance-optimization.md
├── nodejs-backend-development.md
└── your-new-article.md
```

## Article Format

Each article must have:

1. **Frontmatter** (metadata at the top)
2. **Content** (markdown content below)

### Frontmatter Example

```yaml
---
title: "Your Article Title"
description: "A brief description for SEO"
author: "MD MILLAT HOSEN"
date: "2025-01-28"
tags: ["Tag1", "Tag2", "Tag3"]
category: "Web Development"
featured: true
excerpt: "A short excerpt that appears in article cards"
gradient: "from-blue-500 to-purple-600"
---
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Article title |
| `description` | string | ✅ | SEO description |
| `author` | string | ✅ | Author name |
| `date` | string | ✅ | Publication date (YYYY-MM-DD) |
| `tags` | array | ✅ | Array of tags |
| `category` | string | ✅ | Article category |
| `featured` | boolean | ✅ | Show in featured section |
| `excerpt` | string | ✅ | Short description |
| `gradient` | string | ✅ | CSS gradient class |

### Available Gradients

```css
from-blue-500 to-purple-600
from-green-500 to-blue-600
from-purple-500 to-pink-600
from-orange-500 to-red-600
from-teal-500 to-cyan-600
from-indigo-500 to-purple-600
from-pink-500 to-rose-600
from-yellow-500 to-orange-600
from-emerald-500 to-teal-600
from-violet-500 to-purple-600
from-cyan-500 to-blue-600
from-rose-500 to-pink-600
```

### Available Categories

- Web Development
- Frontend Development
- Backend Development
- Mobile Development
- Web Design
- Digital Marketing
- AI & Research
- Academic Research

## Content Formatting

The content supports full Markdown formatting:

### Headings
```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection (H3)
#### Sub-subsection (H4)
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

### Code Blocks
```markdown
```javascript
const example = "code block";
console.log(example);
```
```

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](image-url.jpg)
```

### Blockquotes
```markdown
> This is a blockquote
> It can span multiple lines
```

## Complete Example

```markdown
---
title: "Getting Started with TypeScript"
description: "Learn the basics of TypeScript and how to integrate it into your JavaScript projects"
author: "MD MILLAT HOSEN"
date: "2025-01-28"
tags: ["TypeScript", "JavaScript", "Programming", "Tutorial"]
category: "Frontend Development"
featured: true
excerpt: "TypeScript is a powerful superset of JavaScript that adds static typing and modern features to your code."
gradient: "from-blue-500 to-purple-600"
---

# Getting Started with TypeScript

TypeScript is a powerful superset of JavaScript that adds static typing and modern features to your code.

## Why TypeScript?

TypeScript offers several benefits:

- **Static typing**: Catch errors at compile time
- **Better IDE support**: Enhanced autocomplete and refactoring
- **Modern JavaScript features**: Use latest ECMAScript features
- **Gradual adoption**: Add TypeScript to existing JavaScript projects

## Installation

```bash
npm install -g typescript
npm install --save-dev typescript @types/node
```

## Basic Configuration

Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Your First TypeScript File

```typescript
interface User {
  name: string;
  age: number;
  email?: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

const user: User = {
  name: "John Doe",
  age: 30
};

console.log(greetUser(user));
```

## Conclusion

TypeScript is an excellent choice for building robust, maintainable applications.

> **Pro Tip**: Start with `strict: false` in your tsconfig.json and gradually enable strict mode as you become more comfortable with TypeScript.
```

## File Naming Convention

- Use kebab-case for filenames
- Make it descriptive and SEO-friendly
- Example: `getting-started-with-typescript.md`

## Automatic Updates

Once you add a new `.md` file to the `src/articles/` directory:

1. The article will automatically appear in the blog
2. It will be included in the featured articles slider (if `featured: true`)
3. It will be available at `/blog/[filename]` route
4. All metadata will be automatically parsed and displayed

## Tips

- Keep your frontmatter consistent
- Use descriptive titles and excerpts
- Choose appropriate tags and categories
- Test your markdown formatting
- Keep content well-structured with proper headings

That's it! Your new article will be automatically loaded and displayed on the website. 
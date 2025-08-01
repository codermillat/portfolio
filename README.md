# MD MILLAT HOSEN - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dynamic blog system with markdown support, SEO optimization, and mobile-first design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF)

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Automatic theme detection with smooth transitions
- **Smooth Animations**: CSS animations and micro-interactions
- **Professional UI**: Clean, modern interface with Tailwind CSS

### 📝 Dynamic Blog System
- **Markdown Support**: Write articles in markdown with frontmatter
- **Auto-loading**: Articles automatically load from `public/articles/` directory
- **SEO Optimized**: Each article has proper meta tags and structured data
- **Featured Articles**: Slider with auto-scroll functionality
- **Category Filtering**: Dynamic category and tag system

### 🔍 SEO & Performance
- **Meta Tags**: Dynamic meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine optimization
- **Core Web Vitals**: Optimized for performance metrics

### 📱 Mobile Optimization
- **Touch-friendly**: Optimized for mobile interactions
- **Responsive Images**: Adaptive image loading
- **Fast Loading**: Optimized bundle size and lazy loading
- **PWA Ready**: Progressive Web App capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codermillat/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── articles/           # Markdown blog articles
│   ├── favicon.svg         # Site favicon
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # React components
│   │   ├── blog/          # Blog-related components
│   │   └── ...            # Other components
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   │   └── markdownLoader.ts  # Article loading system
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── docs/                  # Documentation
│   └── ADDING_ARTICLES.md # Article creation guide
└── README.md              # This file
```

## 📝 Adding Articles

The blog system uses a simple markdown-based approach. To add a new article:

1. **Create a new `.md` file** in `src/articles/`
2. **Add frontmatter metadata** at the top of the file
3. **Write your content** in markdown format

### Example Article

```markdown
---
title: "Your Article Title"
description: "SEO description"
author: "MD MILLAT HOSEN"
date: "2025-01-28"
tags: ["Tag1", "Tag2"]
category: "Web Development"
featured: true
excerpt: "Short description"
gradient: "from-blue-500 to-purple-600"
---

# Your Article Title

Your content here...
```

📖 **See [docs/ADDING_ARTICLES.md](docs/ADDING_ARTICLES.md) for complete guide**

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🎨 Customization

### Colors & Themes
Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing
- Breakpoints

### Content
- **Personal Info**: Update `src/App.tsx` for main page content
- **Articles**: Add `.md` files to `public/articles/`
- **SEO**: Modify meta tags in components

### Styling
- **Components**: Edit individual component files
- **Global Styles**: Modify `src/index.css`
- **Tailwind**: Use Tailwind classes for rapid styling

## 📱 Mobile Optimization

### Responsive Design
- **Mobile-first**: All components designed for mobile first
- **Breakpoints**: Tailwind responsive classes
- **Touch Targets**: Minimum 44px touch targets
- **Viewport**: Proper viewport meta tags

### Performance
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Article content caching for performance

## 🔍 SEO Features

### Meta Tags
- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Structured Data
- JSON-LD schema markup
- Person schema for portfolio
- BlogPosting schema for articles
- WebSite schema for site info

### Technical SEO
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Fast loading times

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect Vite settings
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🛡️ Security

- **HTTPS**: Always use HTTPS in production
- **CSP**: Content Security Policy headers
- **XSS Protection**: React's built-in XSS protection
- **Dependencies**: Regular security updates

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Techniques
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format support
- **Font Loading**: Optimized font loading
- **Caching**: Strategic caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**MD MILLAT HOSEN**
- Website: [millat.tech](https://millat.tech)
- GitHub: [@codermillat](https://github.com/codermillat)
- LinkedIn: [codermillat](https://linkedin.com/in/codermillat)
- Twitter: [@codermillat](https://twitter.com/codermillat)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing
- [Lucide React](https://lucide.dev/) - Icons

---

⭐ **Star this repository if you found it helpful!**
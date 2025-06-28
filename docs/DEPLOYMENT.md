# Deployment Guide

This guide covers various deployment options for the MD MILLAT HOSEN Portfolio website.

## 🚀 Quick Deploy Options

### Netlify (Recommended)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/codermillat/portfolio)

1. **Connect Repository**
   - Sign up/login to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the portfolio repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy**
   - Click "Deploy site"
   - Automatic deployments on every push to main branch

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/codermillat/portfolio)

1. **Import Project**
   - Sign up/login to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import from GitHub

2. **Configuration**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Automatic deployments on git push

## 🛠 Manual Deployment

### Build Process
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview build locally (optional)
npm run preview
```

### Static Hosting Services

#### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

#### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting

# Configure firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

# Deploy
npm run build
firebase deploy
```

#### AWS S3 + CloudFront
```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Create S3 bucket
aws s3 mb s3://your-portfolio-bucket

# Upload files
npm run build
aws s3 sync dist/ s3://your-portfolio-bucket --delete

# Configure CloudFront distribution
# (Use AWS Console or CLI)
```

## 🔧 Environment Configuration

### Environment Variables
No environment variables are required for basic deployment. The site is fully static.

### Custom Domain Setup

#### Netlify Custom Domain
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

#### Vercel Custom Domain
1. Go to Project Settings → Domains
2. Add domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

## 🔍 SEO Configuration

### Meta Tags Verification
Ensure these meta tags are properly configured in `index.html`:

```html
<!-- Primary SEO -->
<title>MD MILLAT HOSEN — Full Stack Developer & Creative Strategist | Portfolio</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

### Sitemap Generation
```bash
# Install sitemap generator
npm install --save-dev sitemap

# Create sitemap script
# Add to package.json scripts
"sitemap": "node scripts/generate-sitemap.js"
```

### Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://mdmillat.dev/sitemap.xml
```

## 📊 Performance Optimization

### Build Optimization
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading
- Optimize image sizes for different devices
- Use CDN for image delivery

### Caching Strategy
```javascript
// netlify.toml
[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

## 🔒 Security Headers

### Netlify Security Headers
```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'"
```

## 📈 Analytics Setup

### Google Analytics 4
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to main.tsx
import { Analytics } from '@vercel/analytics/react';

// Add <Analytics /> component
```

## 🚨 Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Error Tracking
```bash
# Install Sentry
npm install @sentry/react

# Configure in main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
});
```

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run lint
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📝 Deployment Checklist

### Pre-deployment
- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Verify all links work correctly
- [ ] Check responsive design on multiple devices
- [ ] Validate HTML and CSS
- [ ] Test accessibility features
- [ ] Optimize images and assets
- [ ] Update meta tags and SEO elements

### Post-deployment
- [ ] Verify site loads correctly
- [ ] Test all navigation and interactions
- [ ] Check mobile responsiveness
- [ ] Validate SEO meta tags
- [ ] Test contact forms and links
- [ ] Monitor performance metrics
- [ ] Set up analytics tracking
- [ ] Configure monitoring alerts

## 🆘 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Verify all imports are correct
npm run lint
```

#### Deployment Issues
- Check build logs for errors
- Verify build command and output directory
- Ensure all dependencies are in package.json
- Check for environment-specific issues

#### Performance Issues
- Analyze bundle size with `npm run build`
- Optimize images and assets
- Enable compression and caching
- Use CDN for static assets

### Support Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

For additional help with deployment, please open an issue or contact [millat6575@gmail.com](mailto:millat6575@gmail.com).
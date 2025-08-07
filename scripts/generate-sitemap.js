#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all article files
const articlesDir = path.join(__dirname, '../src/articles');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

console.log('🚀 Generating sitemap...\n');

// Read all article files and get their metadata
const articles = [];
const articleFiles = fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.md'));

articleFiles.forEach(file => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const dateMatch = frontmatter.match(/date:\s*["']?([^"'\n]+)["']?/);
    const titleMatch = frontmatter.match(/title:\s*["']([^"']+)["']/);
    
    const slug = file.replace('.md', '');
    const date = dateMatch ? dateMatch[1] : '2025-01-28';
    const title = titleMatch ? titleMatch[1] : slug;
    
    articles.push({
      slug,
      date,
      title,
      file: filePath
    });
  }
});

// Sort articles by date (newest first)
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

console.log(`📝 Found ${articles.length} articles to include in sitemap`);

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.millat.tech/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.millat.tech/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${articles.map(article => `  <url>
    <loc>https://www.millat.tech/blog/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap
fs.writeFileSync(sitemapPath, sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${sitemapPath}`);
console.log(`📊 Total URLs: ${articles.length + 2} (homepage + blog + ${articles.length} articles)`);

// Show recent articles
console.log('\n📅 Recent articles (by date):');
articles.slice(0, 5).forEach(article => {
  console.log(`  - ${article.date}: ${article.title}`);
});

if (articles.length > 5) {
  console.log(`  ... and ${articles.length - 5} more articles`);
}

#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all article files
const articlesDir = path.join(__dirname, '../src/articles');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

console.log('🔍 Validating sitemap coverage...\n');

// Read all article files
const articleFiles = fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.md'))
  .map(file => file.replace('.md', ''));

console.log(`📝 Found ${articleFiles.length} articles:`);
articleFiles.forEach(article => console.log(`  - ${article}`));

// Read sitemap
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract blog URLs from sitemap
const blogUrls = [];
const urlMatches = sitemapContent.match(/<loc>https:\/\/www\.millat\.tech\/blog\/([^<]+)<\/loc>/g);
if (urlMatches) {
  urlMatches.forEach(match => {
    const slug = match.match(/\/blog\/([^<]+)</)[1];
    blogUrls.push(slug);
  });
}

console.log(`\n🗺️  Found ${blogUrls.length} blog URLs in sitemap:`);
blogUrls.forEach(url => console.log(`  - ${url}`));

// Check for missing articles
const missingFromSitemap = articleFiles.filter(article => !blogUrls.includes(article));
const extraInSitemap = blogUrls.filter(url => !articleFiles.includes(url));

console.log('\n📊 Validation Results:');

if (missingFromSitemap.length === 0 && extraInSitemap.length === 0) {
  console.log('✅ Perfect! All articles are properly included in the sitemap.');
} else {
  if (missingFromSitemap.length > 0) {
    console.log('\n❌ Missing from sitemap:');
    missingFromSitemap.forEach(article => console.log(`  - ${article}`));
  }
  
  if (extraInSitemap.length > 0) {
    console.log('\n⚠️  Extra URLs in sitemap (no corresponding article file):');
    extraInSitemap.forEach(url => console.log(`  - ${url}`));
  }
}

console.log(`\n📈 Summary: ${articleFiles.length} articles, ${blogUrls.length} sitemap entries`);

// Exit with error code if there are issues
if (missingFromSitemap.length > 0 || extraInSitemap.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

# Sitemap Management

This project includes automated tools for managing the website sitemap to ensure all blog articles are properly indexed by search engines.

## Available Scripts

### `npm run sitemap:generate`
Automatically generates a new sitemap.xml file based on all articles in the `src/articles/` directory. This script:
- Reads all markdown files from the articles directory
- Extracts metadata (title, date) from frontmatter
- Sorts articles by date (newest first)
- Generates a complete sitemap with proper URLs, dates, and priorities

### `npm run sitemap:validate`
Validates that all articles are properly included in the sitemap. This script:
- Compares articles in `src/articles/` with URLs in `public/sitemap.xml`
- Reports any missing articles or extra URLs
- Provides a summary of coverage

### `npm run sitemap:check`
Alias for `sitemap:validate` - quick way to check sitemap coverage.

## Usage

### When adding a new article:
1. Create your article file in `src/articles/`
2. Run `npm run sitemap:generate` to update the sitemap
3. Run `npm run sitemap:validate` to confirm everything is included

### Regular maintenance:
- Run `npm run sitemap:validate` before deploying to ensure all articles are included
- The sitemap generator automatically uses current dates and proper formatting

## Sitemap Structure

The generated sitemap includes:
- **Homepage** (`/`) - Priority 1.0, Weekly updates
- **Blog Index** (`/blog`) - Priority 0.9, Weekly updates  
- **All Articles** (`/blog/[slug]`) - Priority 0.7, Monthly updates

Articles are sorted by date with the newest articles appearing first in the sitemap.

## File Locations

- **Sitemap:** `public/sitemap.xml`
- **Generator Script:** `scripts/generate-sitemap.js`
- **Validator Script:** `scripts/validate-sitemap.js`
- **Articles Directory:** `src/articles/`

## Automation

The sitemap scripts can be integrated into your CI/CD pipeline:

```bash
# Validate sitemap in CI
npm run sitemap:validate

# Regenerate sitemap before build
npm run sitemap:generate
npm run build
```

## Search Engine Submission

After updating the sitemap, submit it to search engines:
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmaster
- **Direct URL:** https://www.millat.tech/sitemap.xml

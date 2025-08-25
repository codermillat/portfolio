# System Patterns

## System Architecture
- Modular React component structure for maintainability and scalability.
- TypeScript for type safety and robust development.
- Vite for fast builds and efficient development workflow.
- Tailwind CSS for utility-first, consistent styling.
- Automated content integration pipeline for articles and SEO.

## Key Technical Decisions
- Use of markdown files for article content, enabling easy authoring and version control.
- Automated sitemap and SEO metadata generation for discoverability.
- Responsive, accessible design with ARIA and semantic HTML.
- Strict adherence to DRY and SOLID principles in code organization.

## Design Patterns in Use
- Container/presenter pattern for React components.
- Separation of concerns between content, presentation, and logic.
- Utility modules for analytics, SEO, and social image management.
- Automated scripts for content validation and deployment.

## Component Relationships
- Blog articles are loaded and rendered via markdownLoader and blog components.
- SEO and analytics utilities are integrated at the app and page level.
- Navigation and layout components provide a consistent user experience.

## Critical Implementation Paths
- Article creation → markdown integration → automated indexing → SEO optimization → publication.
- Continuous documentation and Memory Bank updates to ensure project clarity and maintainability.

---

## Canonical Process: Adding a New Article to the Blog

1. **Create the Markdown File:**  
   - Place your `.md` article in `src/articles/` with a descriptive, hyphen-separated filename.

2. **Add Frontmatter:**  
   - Include all required metadata (title, description, author, date, tags, category, featured, excerpt, gradient).

3. **Write Content:**  
   - Use Markdown, follow content and SEO guidelines.

4. **Update Markdown Loader:**  
   - Import the new article in `src/utils/markdownLoader.ts` (add to the Promise.all array and push to the articles array with the correct slug).

5. **Update Sitemap:**  
   - Add a new `<url>` entry for the article in `public/sitemap.xml` with the correct URL and lastmod date.

6. **Update Memory Bank:**  
   - Add the article to the canonical blog index and cross-reference in `memory-bank/internetPresence.md`.

7. **Test Integration:**  
   - Run the dev server, verify the article appears on the blog index and its own page, and check SEO/meta tags.

8. **(Optional) Update Documentation:**  
   - If the process changes, update `docs/ADDING_ARTICLES.md` and Memory Bank documentation.

This process ensures every article is discoverable, SEO-optimized, and fully integrated into the portfolio/blog system.

# Contributing to MD MILLAT HOSEN Portfolio

Thank you for your interest in contributing to my portfolio website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug Reports**: Report issues you find
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit pull requests with code changes
- **Documentation**: Improve or add documentation
- **Design Suggestions**: Suggest UI/UX improvements
- **Content**: Suggest content improvements or corrections

### Before You Start

1. **Check Existing Issues**: Look through existing issues to avoid duplicates
2. **Read Documentation**: Familiarize yourself with the project structure
3. **Follow Guidelines**: Ensure your contribution follows our guidelines

## 🐛 Reporting Bugs

### Bug Report Template

When reporting a bug, please include:

```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Screenshots**
If applicable, add screenshots to help explain the problem.

**Environment**
- Browser: [e.g., Chrome, Safari, Firefox]
- Version: [e.g., 22]
- Operating System: [e.g., macOS, Windows, Linux]
- Device: [e.g., Desktop, Mobile, Tablet]

**Additional Context**
Any other context about the problem.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you like this feature to work?

**Alternative Solutions**
Any alternative solutions you've considered.

**Additional Context**
Any other context, mockups, or examples.
```

## 🔧 Code Contributions

### Development Setup

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Standards

#### TypeScript
- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` types when possible
- Use interfaces for object shapes

#### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Implement proper error boundaries

#### Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Ensure accessibility standards
- Test across different screen sizes

#### Code Quality
- Run linting: `npm run lint`
- Fix formatting: `npm run format`
- Check types: `npm run type-check`
- Ensure all tests pass

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples
```bash
feat: add dark mode toggle
fix: resolve mobile navigation issue
docs: update README with new features
style: format code with prettier
refactor: simplify hero component
test: add unit tests for utils
chore: update dependencies
```

### Pull Request Process

1. **Create a Feature Branch**
   - Branch from `main`
   - Use descriptive branch names

2. **Make Your Changes**
   - Write clean, well-documented code
   - Add tests if applicable
   - Update documentation

3. **Test Your Changes**
   - Run the development server
   - Test on different devices/browsers
   - Check for accessibility issues
   - Verify performance impact

4. **Submit Pull Request**
   - Use the PR template
   - Provide clear description
   - Include screenshots if UI changes
   - Link related issues

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Cross-browser testing
- [ ] Accessibility testing

## Screenshots
If applicable, add screenshots of UI changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code is commented where necessary
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance impact considered

## Related Issues
Closes #[issue number]
```

## 📝 Content Contributions

### Adding Articles

To add new blog articles:

1. Create a new `.md` file in `public/articles/`
2. Follow the frontmatter format (see `docs/ADDING_ARTICLES.md`)
3. Write content in Markdown
4. Test the article renders correctly
5. Submit a pull request

### Content Guidelines

- **Accuracy**: Ensure all information is accurate and up-to-date
- **Clarity**: Write clear, concise content
- **SEO**: Use proper headings and meta descriptions
- **Accessibility**: Include alt text for images
- **Mobile**: Ensure content works well on mobile devices

## 🎨 Design Contributions

### Design Guidelines

- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure WCAG 2.1 AA compliance
- **Responsive**: Design for all screen sizes
- **Performance**: Optimize for fast loading
- **Brand**: Maintain brand consistency

### Design Process

1. **Research**: Understand the problem and context
2. **Ideate**: Generate multiple solutions
3. **Prototype**: Create mockups or prototypes
4. **Test**: Get feedback from users
5. **Implement**: Code the final solution

## 🧪 Testing

### Testing Guidelines

- **Unit Tests**: Write tests for utility functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user flows
- **Accessibility Tests**: Ensure accessibility compliance
- **Performance Tests**: Monitor performance impact

### Testing Checklist

- [ ] Code works as expected
- [ ] No console errors
- [ ] Responsive on all devices
- [ ] Accessible to screen readers
- [ ] Fast loading times
- [ ] Cross-browser compatibility

## 📚 Documentation

### Documentation Standards

- **Clarity**: Write clear, concise documentation
- **Examples**: Include practical examples
- **Updates**: Keep documentation current
- **Structure**: Use proper headings and formatting

### Documentation Areas

- **README.md**: Project overview and setup
- **CONTRIBUTING.md**: This file
- **docs/**: Additional documentation
- **Code Comments**: Inline documentation

## 🚀 Deployment

### Deployment Process

1. **Build**: `npm run build`
2. **Test**: Verify build works correctly
3. **Deploy**: Push to production
4. **Monitor**: Check for issues

### Deployment Checklist

- [ ] Build completes successfully
- [ ] All assets load correctly
- [ ] SEO meta tags are present
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] Mobile experience is good

## 🤝 Community Guidelines

### Code of Conduct

- **Respect**: Be respectful to all contributors
- **Inclusive**: Welcome diverse perspectives
- **Constructive**: Provide constructive feedback
- **Professional**: Maintain professional behavior

### Communication

- **Issues**: Use GitHub issues for discussions
- **Discussions**: Use GitHub Discussions for general topics
- **Email**: Contact maintainer for sensitive issues

## 📞 Getting Help

### Resources

- **Documentation**: Check the docs folder
- **Issues**: Search existing issues
- **Discussions**: Check GitHub Discussions
- **Email**: Contact millat6575@gmail.com

### Questions

If you have questions:

1. Check the documentation first
2. Search existing issues
3. Create a new issue with the "question" label
4. Contact the maintainer directly

## 🙏 Recognition

### Contributors

All contributors will be recognized in:

- **README.md**: Contributors section
- **GitHub**: Contributors tab
- **Releases**: Release notes

### Types of Recognition

- **Code Contributors**: Listed in contributors
- **Documentation**: Acknowledged in docs
- **Design**: Credited in design files
- **Testing**: Recognized in test files

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to my portfolio! Your help makes this project better for everyone. 🎉
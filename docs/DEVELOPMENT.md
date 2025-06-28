# Development Guide

This guide provides detailed information for developers working on the MD MILLAT HOSEN Portfolio project.

## 🛠 Development Environment Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Git**: Latest version
- **Code Editor**: VS Code recommended

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/codermillat/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 📁 Project Architecture

### Directory Structure
```
src/
├── components/           # React components
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact section component
│   ├── Creative.tsx     # Creative work showcase
│   ├── Experience.tsx   # Experience timeline
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Landing hero section
│   ├── Navbar.tsx       # Navigation component
│   ├── Projects.tsx     # Projects showcase
│   ├── Resume.tsx       # Resume download section
│   └── Skills.tsx       # Skills overview
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type definitions
```

### Component Architecture
- **Functional Components**: All components use React hooks
- **TypeScript**: Strict typing for better development experience
- **Props Interface**: Each component defines its props interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
primary-50: #eff6ff
primary-100: #dbeafe
primary-200: #bfdbfe
primary-300: #93c5fd
primary-400: #60a5fa
primary-500: #3b82f6  /* Main brand color */
primary-600: #2563eb
primary-700: #1d4ed8
primary-800: #1e40af
primary-900: #1e3a8a
primary-950: #0f172a

/* Gray Scale */
gray-50: #f8fafc
gray-100: #f1f5f9
gray-200: #e2e8f0
gray-300: #cbd5e1
gray-400: #94a3b8
gray-500: #64748b
gray-600: #475569
gray-700: #334155
gray-800: #1e293b
gray-900: #0f172a
```

### Typography
```css
/* Font Families */
font-sans: Inter, system-ui, -apple-system, sans-serif
font-mono: JetBrains Mono, Menlo, Monaco, monospace
font-serif: Playfair Display, Georgia, serif

/* Font Sizes */
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
text-6xl: 3.75rem (60px)
```

### Spacing System
```css
/* 8px Grid System */
space-1: 0.25rem (4px)
space-2: 0.5rem (8px)
space-3: 0.75rem (12px)
space-4: 1rem (16px)
space-6: 1.5rem (24px)
space-8: 2rem (32px)
space-12: 3rem (48px)
space-16: 4rem (64px)
space-20: 5rem (80px)
space-24: 6rem (96px)
```

### Breakpoints
```css
/* Mobile First Breakpoints */
sm: 640px    /* Small devices (landscape phones) */
md: 768px    /* Medium devices (tablets) */
lg: 1024px   /* Large devices (laptops) */
xl: 1280px   /* Extra large devices (desktops) */
2xl: 1536px  /* 2X large devices (large desktops) */
```

## 🧩 Component Development

### Component Template
```tsx
import React, { useEffect, useRef, useState } from 'react';
import { IconName } from 'lucide-react';

interface ComponentNameProps {
  // Define props interface
  title?: string;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({ 
  title,
  children 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Component content */}
        </div>
      </div>
    </section>
  );
};

export default ComponentName;
```

### Animation Patterns
```tsx
// Intersection Observer for scroll animations
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1, rootMargin: '50px' }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

// Staggered animations
{items.map((item, index) => (
  <div
    key={index}
    className={`transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Item content */}
  </div>
))}
```

## 🎯 State Management

### Local State with useState
```tsx
// Simple state management
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(false);
const [data, setData] = useState<DataType[]>([]);

// State with complex objects
interface FormState {
  name: string;
  email: string;
  message: string;
}

const [formState, setFormState] = useState<FormState>({
  name: '',
  email: '',
  message: ''
});

// Update complex state
const updateFormField = (field: keyof FormState, value: string) => {
  setFormState(prev => ({
    ...prev,
    [field]: value
  }));
};
```

### Effect Hooks
```tsx
// Component mount effect
useEffect(() => {
  // Initialization logic
  return () => {
    // Cleanup logic
  };
}, []);

// Dependency-based effects
useEffect(() => {
  // Effect logic
}, [dependency1, dependency2]);

// Scroll event handling
useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices
```tsx
// Responsive design
<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">

// Hover and focus states
<button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">

// Dark mode support (if implemented)
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">

// Complex responsive layouts
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
```

### Custom CSS (when needed)
```css
/* Global styles in index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Component-specific styles */
.hero-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #1d4ed8 100%);
}
```

## 🔧 Development Tools

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking

# Testing (if implemented)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### ESLint Configuration
```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🧪 Testing Strategy

### Component Testing
```tsx
// Example test structure (if implementing tests)
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<ComponentName />);
    // Test user interactions
  });
});
```

### Manual Testing Checklist
- [ ] Component renders without errors
- [ ] Responsive design works on all breakpoints
- [ ] Animations and transitions work smoothly
- [ ] Accessibility features function correctly
- [ ] Performance is acceptable
- [ ] Cross-browser compatibility

## 🚀 Performance Optimization

### Code Splitting
```tsx
// Lazy loading components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Image Optimization
```tsx
// Responsive images
<img
  src="image-800w.jpg"
  srcSet="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Description"
  loading="lazy"
/>

// Using Pexels images
const imageUrl = "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800";
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Check for unused dependencies
npx depcheck

# Audit dependencies
npm audit
```

## 🔍 Debugging

### Development Tools
```tsx
// React Developer Tools
// Install browser extension for component inspection

// Console debugging
console.log('Debug info:', { variable });
console.table(arrayData);
console.time('Performance test');
// ... code to test
console.timeEnd('Performance test');

// TypeScript debugging
const debugData: any = complexObject;
console.log(debugData);
```

### Common Issues and Solutions

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npx tsc --build --clean

# Check for type errors
npx tsc --noEmit
```

#### Build Issues
```bash
# Clear all caches
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

#### Styling Issues
```bash
# Rebuild Tailwind CSS
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

# Check for conflicting styles
# Use browser dev tools to inspect elements
```

## 📚 Learning Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react)

### Best Practices
- [React Best Practices](https://react.dev/learn)
- [TypeScript Best Practices](https://typescript-eslint.io/rules)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref)

### Tools and Extensions
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 🤝 Contributing Workflow

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

### Commit Message Convention
```
type(scope): description

feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] Components are responsive
- [ ] Accessibility is maintained
- [ ] Performance is not degraded
- [ ] Tests pass (if applicable)

---

For questions or support, please open an issue or contact [millat6575@gmail.com](mailto:millat6575@gmail.com).
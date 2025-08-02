// Google Analytics utility functions for React Router and custom events

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views for React Router
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-F2JB9DQD8G', {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific user interactions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

export const trackLinkClick = (linkName: string, destination: string) => {
  trackEvent('click', 'link', `${linkName} - ${destination}`);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName);
};

export const trackSocialClick = (platform: string) => {
  trackEvent('click', 'social', platform);
};

export const trackBlogView = (articleSlug: string, articleTitle: string) => {
  trackEvent('view', 'blog_article', `${articleSlug} - ${articleTitle}`);
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section', sectionName);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', `scroll_depth_${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('timing', 'engagement', 'time_on_page', seconds);
};

// Track user engagement
export const trackEngagement = (action: string, details?: string) => {
  trackEvent(action, 'engagement', details);
}; 
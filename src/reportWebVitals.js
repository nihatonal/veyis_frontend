import { getCLS, getFID, getLCP } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);  // Capture Cumulative Layout Shift
    getFID(onPerfEntry);  // Capture First Input Delay
    getLCP(onPerfEntry);  // Capture Largest Contentful Paint
  }
};

export { reportWebVitals };
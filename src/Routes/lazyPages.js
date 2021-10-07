import { lazy, Suspense } from 'react';

import routes from './routes';

import PageLoadingSpinner from '../components/PageLoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

function lazyLoadPages(page) {
  const Component = lazy(() => import(`../pages/${page}/index.jsx`));
  return (
    <ErrorBoundary>
      <Suspense fallback={PageLoadingSpinner()}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

// Generate key (page): value (lazy loading component with error boundary) pair.
const COMPONENTS = {};
for (let route in routes) {
  COMPONENTS[routes[route].pageName] = lazyLoadPages(routes[route].pageName);
}

export default COMPONENTS;

import { lazy, Suspense } from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import PageLoadingSpinner from './components/PageLoadingSpinner';
import './App.scss';

const RoutesGenerator = lazy(() => import('./Routes'));

function App() {
  return (
    <main className="App">
      <ErrorBoundary>
        <Suspense fallback={PageLoadingSpinner()}>
          <RoutesGenerator />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;

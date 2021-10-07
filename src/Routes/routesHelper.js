import lazyPages from './lazyPages';
import routes from './routes';

// Add Routes here
const mergedRoutes = {};

for (let path in routes) {
  mergedRoutes[path] = {
    ...routes[path],
    component: lazyPages[routes[path].pageName],
  };
}

export default mergedRoutes;

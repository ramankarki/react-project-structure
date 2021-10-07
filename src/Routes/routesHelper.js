import LazyLoadPages from './LazyLoadPages';
import routes from './routes';

// Add Routes here
const mergedRoutes = {};

for (let path in routes) {
  mergedRoutes[path] = {
    ...routes[path],
    component: LazyLoadPages[routes[path].pageName],
  };
}

export default mergedRoutes;

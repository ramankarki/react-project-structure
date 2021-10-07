import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import configureStore from './configureStore';

const store = configureStore({});

// hot reloading - only reset the code changed reducer, https://redux.js.org/usage/configuring-your-store#hot-reloading
const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}
renderApp();

// enable service worker on production
if (process.env.NODE_ENV === 'production') serviceWorkerRegistration.register();
serviceWorkerRegistration.unregister();

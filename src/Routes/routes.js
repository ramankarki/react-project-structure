import {
  DASHBOARD_PAGE,
  LOGIN_PAGE,
  PAGE_NOT_FOUND,
  ROOT,
  SIGNUP_PAGE,
} from './constants';

const routes = {
  [ROOT]: {
    private: false,
    pageName: 'Home',
  },

  [SIGNUP_PAGE]: {
    private: false,
    pageName: 'Signup',
  },

  [LOGIN_PAGE]: {
    private: false,
    pageName: 'Login',
  },

  [DASHBOARD_PAGE]: {
    private: true,
    pageName: 'Dashboard',
  },

  // Add your routes here

  [PAGE_NOT_FOUND]: {
    private: false,
    pageName: 'PageNotFound',
  },
};

export default routes;

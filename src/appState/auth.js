import { APP_SIGNUP_STATE, USER } from '../actions/constants';

const auth = {
  [APP_SIGNUP_STATE]: {
    postRoute: (params = 'whatever') => `/api/v1/your-post-route/${params}`,
    getRoute: (params = 'whatever') => `/api/v1/your-post-route/${params}`,
    domainState: USER,
  },
};

export default auth;

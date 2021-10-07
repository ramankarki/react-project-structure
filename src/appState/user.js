import { APP_USER_STATE, USER } from '../actions/constants';

const user = {
  [APP_USER_STATE]: {
    getRoute: (params = 'whatever') => `/api/v1/your-api/${params}`,
    domainState: USER,
  },
};

export default user;

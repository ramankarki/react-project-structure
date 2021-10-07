import auth from './auth';
import user from './user';

const appStateObj = {
  ...auth,
  ...user,
};

const appState = (TYPE) => ({
  ...appStateObj[TYPE],
  requestStatus: null,
  requestConst: {
    pending: 'pending',
    failed: 'failed',
    getSuccess: 'getSuccess',
    postSuccess: 'postSuccess',
    patchSuccess: 'patchSuccess',
    deleteSuccess: 'deleteSuccess',
  },
});

export default appState;

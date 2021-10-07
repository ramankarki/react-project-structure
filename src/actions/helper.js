export const storeUserData = (data, domainState) => {
  if (domainState === 'USER') {
    const user = JSON.parse(localStorage.getItem('USER')) || {};
    user.user = data.user;

    if (data.token) {
      user.token = data.token;
      user.expiryDate = Date.now() + 7776000000 + '';
    }

    localStorage.setItem('USER', JSON.stringify(user));
  }
};

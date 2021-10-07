import { create } from 'axios';
import { createHashHistory } from 'history';
import { LOGIN_PAGE } from '../Routes/constants';

const history = createHashHistory();

function API() {
  let baseURL = process.env.REACT_APP_API;

  // Your node server url
  if (process.env.NODE_ENV !== 'production') baseURL = 'http://localhost:8000';

  // this will access token before making request each time
  const user = JSON.parse(localStorage.getItem('USER'));
  const expiryDate = user?.expiryDate || 0;
  if (Date.now() > expiryDate) history.push(LOGIN_PAGE);

  return create({
    baseURL,
    headers: {
      authorization: 'Bearer ' + user?.token,
    },
  });
}

export default API;

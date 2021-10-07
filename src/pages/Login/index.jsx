import { createHashHistory } from 'history';

import { DASHBOARD_PAGE } from '../../Routes/constants';

const history = createHashHistory();

function Login() {
  const login = () => {
    localStorage.setItem(
      'USER',
      JSON.stringify({ expiryDate: Date.now() + 999999 })
    );

    history.push(DASHBOARD_PAGE);
  };

  return (
    <div className="Login">
      <h1>Login page</h1>
      <button onClick={login}>login</button>
    </div>
  );
}

export default Login;

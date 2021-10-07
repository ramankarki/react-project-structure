import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ejectReducer, injectReducer } from '../../utils/dynamicReducers';
import { APP_USER_STATE } from '../../actions/constants';
import HOFreducer from '../../reducers/HOFreducer';
import appState from '../../appState';
import onGet from '../../actions/onGet';
import { LOGIN_PAGE } from '../../Routes/constants';

import Header from '../../templates/Header';
import Footer from '../../templates/Footer';

function Dashboard(props) {
  const history = useHistory();

  useEffect(() => {
    injectReducer(
      APP_USER_STATE,
      HOFreducer(APP_USER_STATE, appState(APP_USER_STATE))
    );

    props.onGet(APP_USER_STATE);

    return () => {
      ejectReducer(APP_USER_STATE);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('USER');
    history.push(LOGIN_PAGE);
  };

  return (
    <div className="Home">
      <Header />
      <button onClick={logout}>logout</button>
      <h1>Dashboard Page</h1>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, { onGet })(Dashboard);

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { ejectReducer, injectReducer } from '../../utils/dynamicReducers';
import { APP_SIGNUP_STATE } from '../../actions/constants';
import HOFreducer from '../../reducers/HOFreducer';
import appState from '../../appState';

import Header from '../../templates/Header';
import Footer from '../../templates/Footer';

function Signup() {
  useEffect(() => {
    injectReducer(
      APP_SIGNUP_STATE,
      HOFreducer(APP_SIGNUP_STATE, appState(APP_SIGNUP_STATE))
    );

    return () => {
      ejectReducer(APP_SIGNUP_STATE);
    };
  }, []);

  return (
    <div className="Home">
      <Header />
      <h1>Signup page</h1>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {})(Signup);

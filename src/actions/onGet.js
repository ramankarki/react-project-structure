// make all the @GET request with single action creator.

import { batch } from 'react-redux';

import API from '../utils/API';
import { READ } from './constants';
import { storeUserData } from './helper';

/**
 *
 * @param {Object} REDUCER_TYPE
 * @param {Function} callback
 * @param  {...any} args
 */

const onGet =
  (REDUCER_TYPE, callback = () => {}, ...args) =>
  (dispatch, getState) => {
    const appState = getState()[REDUCER_TYPE];
    const { domainState, dynamicState, noGetSuccessModal } = appState;

    dispatch({
      type: REDUCER_TYPE,
      payload: { ...appState, requestStatus: appState.requestConst.pending },
    });

    API()
      .get(appState.getRoute(...args))
      .then(({ data }) =>
        batch(() => {
          storeUserData(data, domainState);

          dispatch({
            type: dynamicState ? domainState + READ : domainState,
            payload: data,
          });

          dispatch({
            type: REDUCER_TYPE,
            payload: {
              ...appState,
              requestStatus: noGetSuccessModal
                ? null
                : appState.requestConst.getSuccess,
            },
          });

          callback(data);
        })
      )
      .catch(({ response }) =>
        dispatch({
          type: REDUCER_TYPE,
          payload: {
            ...appState,
            response,
            requestStatus: appState.requestConst.failed,
          },
        })
      );
  };

export default onGet;

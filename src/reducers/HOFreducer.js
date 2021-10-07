/**
 *
 * @param {String} TYPE - It is the action type.
 * @param {Object} initialState - Initial state for the reducer.
 * @description It is a higher order function that returns a reducer. That reducer will only update if same TYPE is dispatched.
 * @usage const reducer = HOFreducer('UPDATE_STATE', {test: 1});
 * @returns It returns a reducer.
 */

const HOFreducer =
  (TYPE, initialState = {}) =>
  (state = initialState, action) => {
    switch (action.type) {
      case TYPE:
        return action.payload;
      default:
        return state;
    }
  };

export default HOFreducer;

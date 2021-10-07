const round = (number) => Math.round(number * 100) / 100;

/**
 * @description enhancers adds extra functionality to store.
 */
const monitorReducerEnhancer =
  (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log(`reducer process time: ${diff} ms`);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };

export default monitorReducerEnhancer;

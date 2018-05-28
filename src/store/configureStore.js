import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import inputNames from '../reducers/inputNames_reducer';
import originalNames from '../reducers/originalNames_reducer';
import instructions from '../reducers/instructions_reducer';

export default () => {
  const store = createStore(
    combineReducers({
      inputNames,
      originalNames,
      instructions
    }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

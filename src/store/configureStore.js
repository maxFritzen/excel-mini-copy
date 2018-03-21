import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import inputNames from '../reducers/inputNames_reducer';
import originalNames from '../reducers/originalNames_reducer';
import instructions from '../reducers/instructions_reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      inputNames,
      originalNames,
      instructions
    }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
};

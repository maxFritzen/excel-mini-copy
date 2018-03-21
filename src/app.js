
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import Grid from './components/Grid';
import Instructions from './components/Instructions';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <div className='content-container'>
      <Grid />
      <Instructions />
    </div>

  </Provider>
);
let hasRendered = false;
const renderApp =  () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();

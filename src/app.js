
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import Grid from './components/Grid';
import Instructions from './components/Instructions';
import Main from './components/Main';
import Results from './components/Results';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <div className='content-container'>
      <HashRouter>
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/main" component={Main} />
          <Redirect to="/main" />
        </Switch>
      </HashRouter>
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

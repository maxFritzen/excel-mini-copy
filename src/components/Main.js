import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect, HashRouter } from 'react-router-dom';
import SubMenu from './SubMenu';
import Grid from './Grid';
import Instructions from './Instructions';
import Menu from './Menu';

const Main = (props) => (

  <div>

    <Menu path={props.match.path}/>
    <Switch>
      <Route path={`${props.match.path}/:data`} component={SubMenu} />
      {/* <Route path="/" component={SubMenu} /> */}
      <Redirect to={`${props.match.path}/home`} />
    </Switch>

    <Grid />
    <Instructions />
  </div>
);

export default Main;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => (
  <ul className="menu">
    <NavLink to={`${props.path}/file`} className="menu__link" activeClassName="menu__link--active">File</NavLink>
    <NavLink to={`${props.path}/home`} className="menu__link" activeClassName="menu__link--active">Home</NavLink>
    <NavLink to={`${props.path}/insert`} className="menu__link" activeClassName="menu__link--active">Insert</NavLink>
    <NavLink to={`${props.path}/page-layout`} className="menu__link" activeClassName="menu__link--active">Page Layout</NavLink>
    <NavLink to={`${props.path}/formulas`} className="menu__link" activeClassName="menu__link--active">Formulas</NavLink>
    <NavLink to={`${props.path}/data`} className="menu__link" activeClassName="menu__link--active">Data</NavLink>
    <NavLink to={`${props.path}/review`} className="menu__link" activeClassName="menu__link--active">Review</NavLink>
    <NavLink to={`${props.path}/view`} className="menu__link" activeClassName="menu__link--active">View</NavLink>
  </ul>
);

export default Menu;

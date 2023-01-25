import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Display from '../Display/Display.js';
import NotFound from '../NotFound/NotFound.js';
import Nav from '../Nav/Nav.js';

export default function Main() {
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/rgb/:red/:green/:blue' component={Display}/>
        <Route exact path='/rgb/*' component={NotFound}/>
      </Switch>
    </>
  );
}
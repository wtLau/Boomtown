import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import all components
import Items from '../containers/Items/';
import Login from '../containers/Login/';
import Share from '../containers/Share/';
import Profile from '../containers/Profile/';
import NotFound from '../containers/NotFound/';
import SignUp from '../containers/SignUp/';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route exact path="/" component={Items} />
    <Route path="/shares" component={Share} />
    <Route path="/profile/:id" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

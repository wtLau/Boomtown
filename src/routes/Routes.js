import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

//import all components

const NavBar = () => (
  <div>
    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
    <NavLink to="/posts" activeClassName="selected">Posts</NavLink>
  </div>
);

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/posts" component={Posts} />
        <Redirect from="/old-posts" to="/posts" />
        <Route component={NotFound} render={() => <h1>not here</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
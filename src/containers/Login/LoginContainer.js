import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showLoginError } from '../../redux/modules/auth';
import { FirebaseAuth } from '../../config/firebase';

import Login from './Login';

class LoginContainer extends Component {

  static propTypes = {};

  login = ({ email, password }) => {
    // TODO move  this to a thunk
    FirebaseAuth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        // user doesn't not exist, must sign up
        // this.props.dispatch(showJoinModal(true));
      } else {
        // theres an error
        this.props.dispatch(showLoginError(true));
      }
    });
  }

  join = () => {
    // TODO Build a form
    // has the user schema [email. fullname, bio]
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticated) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <Login
        login={(e) => {
          e.preventDefault();
          this.login({ email: 'lau.brian@hotmail.com', password: 'laulau' });
        }}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.loginAuth,
    // loginFormValues
  };
}

export default connect(mapStateToProps)(LoginContainer);

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
    FirebaseAuth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
      } else {
        this.props.dispatch(showLoginError(true));
      }
    });
  }

  join = () => {};

  reset = () => {
    this.props.reset();
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { authenticated, loginFormValues, ...props } = this.props;

    if (this.props.authenticated) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <Login
        {...props}
        reset={this.reset}
        login={(e) => {
          e.preventDefault();
          this.login(loginFormValues);
          {/* { email: 'lau.brian@hotmail.com', password: 'laulau' } */}
        }}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.loginAuth,
    // loginFormValues: getFormValues('LoginForm')(state)
  };
}

export default connect(mapStateToProps)(LoginContainer);

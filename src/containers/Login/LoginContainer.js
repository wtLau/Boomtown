import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showLoginError, loadLoginAuth } from '../../redux/modules/auth';
import { FirebaseAuth, FirebaseDB } from '../../config/firebase';

import Login from './Login';

class LoginContainer extends Component {

  static propTypes = {};

  login = ({ email, password }) => {
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

  join = () => {};

  reset = () => {
    this.props.reset();
  };

  render() {
    this.login({ email: 'lau.bcom', password: 'laulau' });

    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.authenticated) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <Login login={this.login} />
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.loginAuth,
  };
}

export default connect(mapStateToProps)(LoginContainer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        // this.props.dispatch(showLoginError(true));
      }
    });
  }

  join = () => {};

  reset = () => {};

  render() {
    return (
      <Login login={this.login} />
    );
  }
}
FirebaseAuth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }
});

function mapStateToProps(state) {
  return {
    FirebaseAuth: state.auth.profile
  };
}

export default connect(mapStateToProps)(LoginContainer);

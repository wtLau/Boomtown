import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import { FirebaseAuth } from '../../config/firebase';

import SignUp from './SignUp';

class SignUpContainer extends Component {

 // static propTypes = {};

  login = ({ email, password }) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password)
    .catch((error) => { console.log(error) }
    );
  }

  signUpUser = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        fullname: 'Brian-test',
        email: '3lauwandgtatbrian@hotmail.com',
        bio: 'ldsf',
        password: 'laulau' }
    })
      .then(({ data }) => {
        console.log('got data', data);
        this.login({
          email: '3lauwandgtatbrian@hotmail.com',
          password: 'laulau' });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticated) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <div>
        <SignUp signUpUser={(event) => this.signUpUser(event)} />
      </div>
    );
  }
}

const addUser = gql`
  mutation addUser (
    $fullname: String!
    $email: String!
    $bio: String
    $password: String!
  ) {
    addUser(
      fullname: $fullname
      email: $email
      bio: $bio
      password: $password
    ) {
      fullname
      email
    }
  }
`;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.loginAuth,
  };
}

const addTheUser = graphql(addUser)(SignUpContainer);
export default connect(mapStateToProps)(addTheUser);

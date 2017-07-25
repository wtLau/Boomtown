import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Profile from './Profile';
import Items from '../Items/Items';
import Loader from '../Loader/Loader';


const fetchProfileNew = gql`
  query profileList($id: ID!){
    user (id: $id){
      id
      email
      fullName
      bio
      items {
        id
        title
        description
        imageUrl
        tags
        itemOwner {
          id
        }
        createdOn
        available
        borrower {
          id
        }
      }
    }
  }
`;

class ProfileContainer extends Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    return (
      <div>
        <Profile profileData={this.props.data.user} />
        {/* [this.props.match.params.id] */}
        <Items itemsData={this.props.data.user.items} />;
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     loading: state.items.loading,
//     profileData: state.profile.profileData
//   };
// }

export default graphql(fetchProfileNew, {
  options: ownProps => {
    return { variables: {
        id: ownProps.match.params.id
      }
    }
  }
})(ProfileContainer);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Profile from './Profile';
import Items from '../Items/';
import Loader from '../Loader/Loader';


const fetchProfileNew = gql`
  query profileList{
    users {
      id
      email
      fullName
      bio
    }
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
`;

class ProfileContainer extends Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    return (
      <div>
        <Profile profileData={this.props.data.users} />
        {/* [this.props.match.params.id] */}
        <Items itemsData={this.props.data.users} />;
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData,
    // profileData: state.users.profileData
  };
}

const ProfileContainerWithData = graphql(fetchProfileNew)(ProfileContainer);
export default connect(mapStateToProps)(ProfileContainerWithData);

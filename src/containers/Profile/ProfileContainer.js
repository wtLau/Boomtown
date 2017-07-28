import React, { Component } from 'react';
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
      fullname
      bio
      borrowed {
        id
        title
        itemowner {
          fullname
        }
      }
      items {
        id
        title
        description
        imageurl
        tags {
          title
        }
        itemowner {
          fullname
        }
        created
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
        {/* <Items itemsData={this.props.data.user.items} />; */}
      </div>
    );
  }
}


export default graphql(fetchProfileNew, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(ProfileContainer);


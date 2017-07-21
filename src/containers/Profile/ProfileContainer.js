import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Items from './Profile';
import Loader from '../Loader/Loader';

// import { fetchItemData } from '../../redux/modules/items';


const fetchProfileNew = gql`
  query profileList{
    users {
      id
      email
      fullName
      bio
      items {
        id
      }
      borrowed {
        id
        title
        itemOwner {
          fullName
        }
      }
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
    return <Items itemsData={this.props.data.items} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData
  };
}

const ProfileContainerWithData = graphql(fetchProfileNew)(ProfileContainer);
export default connect(mapStateToProps)(ProfileContainerWithData);

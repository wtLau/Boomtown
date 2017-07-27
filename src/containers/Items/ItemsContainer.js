import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Items from './Items';
import Loader from '../Loader/Loader';


const fetchItemNew = gql`
  query itemList{
    items {
    
      title
      description
      imageurl
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

class ItemsContainer extends Component {
  newFilterList() {
    const itemsData = this.props.data.items || [];
    const itemFilter = this.props.itemFilter;

    if (itemFilter.length) {
      return itemsData.filter(
        (itemData) => (itemData.tags.find(tag => itemFilter.includes(tag)))
      );
    }
    return itemsData;
  }

  render() {
    const loading = this.props.data.loading;
    if (loading) return <Loader />;

    const filterItems = this.newFilterList();

    return <Items itemsData={filterItems} />;
  }
}

function mapStateToProps(state) {
  return {
    // loading: state.items.loading,
    itemFilter: state.items.itemFilter
  };
}

const ItemsContainerWithData = graphql(fetchItemNew)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);


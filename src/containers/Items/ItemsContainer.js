import React, { Component } from 'react';
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
    }
  }
`;

class ItemsContainer extends Component {
  newFilterList() {
    const itemsData = this.props.data.items || [];
    const itemFilter = this.props.itemFilter;

    if (itemFilter) {
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


export default graphql(fetchItemNew)(ItemsContainer);

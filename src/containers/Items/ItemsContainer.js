import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


import { fetchItemData } from '../../redux/modules/items';
import Items from './Items';
import Loader from '../Loader/Loader';


class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItemData());
  }

  newFilterList(itemFilter) {
    const { itemsData } = this.props;

    if (itemFilter) {
      return itemsData.filter(
        (itemData) => (itemData.tags.find(tag => itemFilter.includes(tag)))
      );
    }
    return itemsData;
  }

  render() {
    const { itemFilter } = this.props;
    const filterItems = this.newFilterList(itemFilter);
    if (this.props.loading) return <Loader />;
    if (filterItems.length) {
      return <Items itemsData={filterItems} />;
    } else {
      return <Items itemsData={this.props.itemsData} />;
    }
  }
}

  const fetchItemNew = gql`
    query {
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
  `

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData,
    itemFilter: state.items.itemFilter
  };
}

// const MoviesListWithData = graphql(fetchMovies)(MoviesList);
// export default connect(mapStateToProps)(MoviesListWithData);

export default connect(mapStateToProps)(ItemsContainer);

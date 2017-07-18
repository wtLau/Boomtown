import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items';
import Loader from '../Loader/Loader';

import { fetchItemData } from '../../redux/modules/items';

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

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData,
    itemFilter: state.items.itemFilter
  };
}
export default connect(mapStateToProps)(ItemsContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items';
import Loader from '../Loader/Loader';

import { fetchItemData } from '../../redux/modules/items';


class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItemData());
  }

  render() {
    if (this.props.loading) return <Loader />;
    return <Items itemsData={this.props.itemsData} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData
  };
}
export default connect(mapStateToProps)(ItemsContainer);

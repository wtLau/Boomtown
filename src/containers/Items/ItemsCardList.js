import React, { Component } from 'react';
import ItemCard from './ItemCard';

class ItemsCardList extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      itemsData: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <ItemCard />
    );
  }
}


export default ItemsCardList;

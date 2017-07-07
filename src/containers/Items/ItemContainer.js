import React, { Component } from 'react';
import ItemCard from './ItemCard';
import Loader from '../Loader/Loader';

class ItemsCardList extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      itemsData: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(data => {
        this.setState({
          itemsData: data,
          loading: false,
        });
      })
    .catch(error => console.log(error));
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (<ItemCard itemsData={this.state.itemsData} />);
  }
}


export default ItemsCardList;

import React from 'react';
import Masonry from 'react-masonry-component';
import ItemCard from '../ItemsCard';
// import './styles';

const ItemCardList = ({ itemsData }) => (
  <Masonry>
    <div>
    {itemsData.map(itemData => (
      <ItemCard itemData={itemData} />
    ))}
    </div>
  </Masonry>
);

export default ItemCardList;

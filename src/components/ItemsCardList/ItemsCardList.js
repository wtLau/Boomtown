import React from 'react';
import Masonry from 'react-masonry-component';
import ItemCard from '../ItemsCard';
import './styles.css';

const ItemCardList = ({ itemsData }) => (
  <Masonry
    className={'itemCardListWrapper'}
    elementType={'ul'}
  >
    {itemsData.map(itemData => (
      <ItemCard itemData={itemData} />
    ))}
  </Masonry>
);

export default ItemCardList;

import React from 'react';
import ItemsCardList from '../../components/ItemsCardList';

import './style.css';

const Items = ({ itemsData }) => (
  <ItemsCardList itemsData={itemsData} />
);

export default Items;

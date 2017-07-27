import React from 'react';
import PropTypes from 'prop-types';
import ItemsCardList from '../../components/ItemsCardList';

import './style.css';

const Items = ({ itemsData }) => (
  <ItemsCardList itemsData={itemsData} />
);

export default Items;

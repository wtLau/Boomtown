import React from 'react';
import PropTypes from 'prop-types';
import ItemsCardList from '../../components/ItemsCardList';

import './style.css';

const Items = ({ itemsData }) => (
  <ItemsCardList itemsData={itemsData} />
);

// Items.propTypes = {
//   itemsData: PropTypes.objectOf().isRequired
// };

export default Items;

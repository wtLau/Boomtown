import React from 'react';
import ItemsCardList from '../../components/ItemsCardList';

import './style.css';

const Profile = ({ itemsData }) => (
  <ItemsCardList itemsData={itemsData} />
);

export default Profile;

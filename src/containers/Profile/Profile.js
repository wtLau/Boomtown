import React from 'react';
import ItemsCardList from '../../components/ItemsCardList';
import ProfileCard from '../../components/ProfileCard/';
import './style.css';

const Profile = ({ itemsData }) => (
  <div>
    <ProfileCard itemData={itemsData} />
    <ItemsCardList itemsData={itemsData} />
  </div>
);


export default Profile;

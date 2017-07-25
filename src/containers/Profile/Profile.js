import React from 'react';
import ProfileCard from '../../components/ProfileCard/';
import './style.css';

const Profile = ({ profileData }) => (
  <div>
    <ProfileCard profileData={profileData} />
  </div>
);


export default Profile;

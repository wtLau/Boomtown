import React from 'react';
import './style.css';

const Items = ({ itemsData }) => (
  <div>
    {itemsData.map(item => (
      <div key={item.id}>
        <img src={item.imageUrl} alt={item.title} />
        <p>{item.itemOwner.fullName}</p>
        <p>{item.title}</p>
        <p>{item.tags}</p>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default Items;

import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as moment from 'moment';
import Gravatar from 'react-gravatar';


const ItemsCard = ({ itemData }) => (
  <li className="itemCardWrapper">
    <Card>
      <CardMedia overlay={
        <CardTitle title={itemData.title} />} >
        <img src={itemData.imageUrl} alt={itemData.title} />
      </CardMedia>
      <CardHeader
        title={itemData.itemOwner.fullName}
        subtitle={moment.unix(itemData.createdOn).fromNow()}
        avatar={<Gravatar email={itemData.itemOwner.email} />}
      />
      <CardTitle title={itemData.title} subtitle={itemData.tags} />
      <CardText>
        {itemData.description}
      </CardText>
      <CardActions>
        <FlatButton label="BORROW" />
      </CardActions>
    </Card>
  </li>
);

export default ItemsCard;


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
        <img src={itemData.imageurl} alt={itemData.title} />
      </CardMedia>
      <CardHeader
        title={itemData.title}
        avatar={<Gravatar email={itemData.title} />}
      />
      <CardTitle title={itemData.title} subtitle={itemData.title} />
      <CardText>
        {itemData.description}
      </CardText>
      <CardActions>
        <FlatButton label="BORROW" />
      </CardActions>
    </Card>
  </li>
);

  // subtitle={moment(itemData.created).fromNow()}  


export default ItemsCard;


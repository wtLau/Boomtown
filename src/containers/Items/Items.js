import React from 'react';
import * as moment from 'moment';
import Gravatar from 'react-gravatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './style.css';


const Items = ({ itemsData }) => (
  <div className="entry-item">
    {itemsData.map(item => (
      <div key={item.id} className="item-container">
        <Card>
          <CardMedia
            overlay={
              <CardTitle title={item.avalible} />} >
            <img src={item.imageUrl} alt={item.title} />
          </CardMedia>
          <CardHeader
            title={item.itemOwner.fullName}
            subtitle={moment.unix(item.createdOn).fromNow()}
            avatar={<Gravatar email={item.itemOwner.email} />}
          />
          <CardTitle title={item.title} subtitle={item.tags} />
          <CardText>
            {item.description}
          </CardText>
          <CardActions>
            <FlatButton label="BORROW" />
          </CardActions>
        </Card>
      </div>
    ))}
  </div>
);

export default Items;

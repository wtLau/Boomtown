import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ProfileCard = ({ itemData }) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia>
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Currently borrowing:" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);


export default ProfileCard;

import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const ProfileCard = ({ profileData }) => (
  <Card>
    <CardHeader
      title={profileData.fullname}
      subtitle={profileData.fullname}
      avatar="images/jsa-128.jpg"
    />
    <CardMedia>
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    {/* TODO: Map through borrowed so it doesnt show only the 1st borrowed */}
    <CardTitle
      title="Currently borrowing:"
      subtitle={profileData.borrowed[0].title + ' from ' + profileData.borrowed[0].itemowner.fullname}
    />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);


export default ProfileCard;

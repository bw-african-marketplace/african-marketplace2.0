import React from "../../../node_modules/react";
import { Card, Icon, Image } from "../../../node_modules/semantic-ui-react";

const Info = () => (
  <Card style={{width: '100%', marginTop: '10px'}}>
    {/* <Image
      src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      wrapped
      ui={false}
    /> */}
    <Card.Content>
      <Card.Header>Sauti Market Place</Card.Header>
      <Card.Meta>Established in 2019</Card.Meta>
      <Card.Description>
        <p>Who We Are</p>
        <p />
        Sauti Africa empowers small business owners, particularly women, to
        improve their business and economic opportunities to grow out of
        poverty. You will build a platform to enable these business owners to
        create listing for items they have for sale.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        1000 Likes
      </a>
    </Card.Content>
  </Card>
);

export default Info;

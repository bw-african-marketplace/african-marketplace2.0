// Product Card Component
// Use for each product item to be reused throughout the application

import React from "../../node_modules/react";
import { Card, Image } from "../../node_modules/semantic-ui-react";
import CategoriesPage from "./CategoriesPage";




const Comparison = () => {
  return (

      

    <div>
      <Card centered={true} style={{ maxWidth: "250px", height: "auto", margin: "15px" }}>
        <Image
          style={{ maxWidth: "250px" }}
          src="http://placeimg.com/640/360/any"
        />
        <Card.Content>
          <Card.Header>{categories.category}</Card.Header>
            <Card.Meta>
              <span className="date">Product Image: {categories.imgUrl}</span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">Description: {categories.desctiption}</span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">Examples: {categories.examples}</span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">Product: {categories.products}</span>
            </Card.Meta>
          <Card.Description>
           {categories.description}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Comparison;

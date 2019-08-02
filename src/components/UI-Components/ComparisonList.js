import React from "../../../node_modules/react";
import { Card, Image } from "../../../node_modules/semantic-ui-react";

const CardExampleHeaderCard = () => (
  <div className="compareCard">
    <div className="compTitle">
      <p>
        {/* <a href="#">
          <h2>Compare Prices Here</h2>
        </a> */}
      </p>
    </div>
    <Card.Group className="ComparisonContainer">
      <Card>
        <Card.Content>
          <Card.Header>Kenyan Bean Co.</Card.Header>
          <Card.Meta>$2.00/ lbs</Card.Meta>
          <Card.Description>
            <img
              src="https://images.pexels.com/photos/176169/pexels-photo-176169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Card.Header>Sudan Bean Inc.</Card.Header>
          <Card.Meta>$2.10/ lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Card.Header>Nigeria Produce Corp.</Card.Header>
          <Card.Meta>$1.10/ lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>South African Crops Co.</Card.Header>
          <Card.Meta>$1.55/lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/450004/pexels-photo-450004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    {/* Where 2nd row begins */}

    <Card.Group className="ComparisonContainer">
      <Card>
        <Card.Content>
          <Card.Header>Mali Peas Inc.</Card.Header>
          <Card.Meta>$2.00/lbs</Card.Meta>
          <Card.Description>
            <img
              src="https://images.pexels.com/photos/1633973/pexels-photo-1633973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Africa Paradise</Card.Header>
          <Card.Meta>$1.70/lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Kenyan Pride</Card.Header>
          <Card.Meta>$1.75/lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/2316554/pexels-photo-2316554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Ethiopia House</Card.Header>
          <Card.Meta>$3.75/lbs</Card.Meta>
          <Card.Description content="Jake is a drummer living in New York.">
            <img
              src="https://images.pexels.com/photos/1933370/pexels-photo-1933370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="ui-image"
            />
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default CardExampleHeaderCard;
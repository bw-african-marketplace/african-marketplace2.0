import React from "../../../node_modules/react";
import { Image, Divider, Container } from "../../../node_modules/semantic-ui-react";

// need to flex items
// need to add links to category page

const OtherItems = () => (
  <div className="otherItemCard">
    <Divider hidden />
    <div className="TitleCB">
      <h2>Other Items </h2>
      <p />
    </div>

    <Image.Group size="small" className="CoffeeContainer">
      <div className="other-items">
        <h4>Clothing</h4>
        <Image
          src="https://images.pexels.com/photos/2360500/pexels-photo-2360500.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div>

      <div className="other-items">
        <h4>Cookery</h4>
        <Image
          src="https://images.pexels.com/photos/243059/pexels-photo-243059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div>

      <div className="other-items">
        <h4>Beauty Products</h4>
        <Image
          src="https://images.pexels.com/photos/2701926/pexels-photo-2701926.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div>

      <div className="other-items">
        <h4>Beans</h4>
        <Image
          src="https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div>

      <div className="other-items">
        <h4>Spices</h4>
        <Image
          src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div>

      {/* <div className="other-items">
        <h4>Other Goods</h4>
        <Image
          src="https://images.pexels.com/photos/989571/pexels-photo-989571.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="ui-image"
        />
      </div> */}
    </Image.Group>
  </div>
);

export default OtherItems;
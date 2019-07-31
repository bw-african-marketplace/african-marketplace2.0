import React from "../../../node_modules/react";
import { Divider, Image } from "../../../node_modules/semantic-ui-react";

const src1 =
  "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const src2 =
  "https://images.pexels.com/photos/1064840/pexels-photo-1064840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const src3 =
  "https://images.pexels.com/photos/1108822/pexels-photo-1108822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";


const TopImage = () => (
  <div>
    <div className="TopImage">
      <Divider hidden />
      <Image src={src1} size="medium" />
      <Image src={src2} size="medium" />
      <Image src={src3} size="medium" />
    </div>
  </div>
);

export default TopImage;

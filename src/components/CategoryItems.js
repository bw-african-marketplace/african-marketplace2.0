import React, {useState, useEffect} from 'react';
import { Container, Icon, Image, Item } from 'semantic-ui-react';
import axiosWithAuth from './axioAuth';



export default function CategoryItems() {
     const [product, setProduct] = useState();
     const getProducts = () => {
       axiosWithAuth()
         .get(`/items`)
         .then(response => setProduct(response.data))
         .catch(error => {
           console.log(error.response.message);
         });
     };
     useEffect(() => getProducts(), []);
     console.log(product, "products here");

const deleteItem=()=>{
  axiosWithAuth().delete()
}

  return (
    <div>
      {product && product.map(item => {return <div> <h1 style={{ color: "blue" }}> {item.name}</h1> <h1>{item.description}</h1> <h1>{item.price}</h1>  <h1>{item.location}</h1>
      </div>  })}
  
      <Item.Group>
        <Item.Group>
          <Item>
            <Item.Image size="small" src="https://picsum.photos/200" />
            <Item.Content
              verticalAlign="middle"
              style={{ textAlign: "left" }}
            >
              <Item.Header as="a">Product Name</Item.Header>
              <Item.Description>Quick description</Item.Description>
              <Item.Extra>
                <Icon color="green" name="check" /> 121 Votes
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Item.Group>
    </div>
  );
}




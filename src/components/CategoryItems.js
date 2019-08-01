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



  return (
    <div>
      {product && product.map(item => {
        return (
          <div>
            <Item.Group>
              <Item style={{backgroundColor: "white"}}>
                {console.log(item)}
                <Item.Image size="small" src="https://picsum.photos/200" />
                <Item.Content
                  verticalAlign="middle"
                  style={{ textAlign: "left" }}
                >
                  <Item.Header as="a">{item.name}</Item.Header>
                  <Item.Description style={{color: 'black'}}>Location: {item.location}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Location: {item.description}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Price: {item.price}</Item.Description>
                  <Item.Extra>
                    <Icon color="green" name="check" /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        )  
      })}
  
      
    </div>
  );
}




import React, {useState, useEffect} from 'react';
import { Container, Icon, Image, Item } from 'semantic-ui-react';
import axiosWithAuth from './axioAuth';



export default function CategoryItems() {
     const [product, setProduct] = useState();
     const getProducts = () => {
      const id = window.location.href.split('/').pop() 
      axiosWithAuth()
         .get(`items/category/${id}`)
         .then(response => {
           setProduct([response.data])
           console.log(window.location.href.split('/').pop())
          })
         .catch(error => {
           console.log(error);
         });
     };
     useEffect(() => getProducts(), []);
     console.log(product, "products here");

     const deleteItem=()=>{
      axiosWithAuth().delete()
    }
    

  return (
    <div>
      {product && product.map((item, index) => {
        // if (item.category === req.params.id)
        return (
          <div>
            <Item.Group>
              <Item key={index} style={{backgroundColor: "white"}}>
                <Item.Image size="small" src={item.URL} />
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




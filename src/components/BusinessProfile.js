import React, { useState, useEffect } from "react";
import '../App.css';
import  'semantic-ui-react';
import productInfo from './ProductInfo';
import { Grid, Image, Card, Item, Icon, Button } from "semantic-ui-react";
import axiosWithAuth from "./axioAuth";
import AddForm from './UI-Components/AddForm';

// const BusinessProfile = (props) =>{
//    console.log(productInfo)
//        export default function SearchForm({ onSearch }) {
//        const [query, setQuery] = useState({
//        name: ""
//        })
//        const handleInputChange = (event) => {
//          setQuery({ ...query, name: event.target.value })
//        }
// const products = [productInfo, setProductInfo] = useState([{}])

// const productsOwned=()=>{
//     axiosWithAuth()
// }


const BusinessProfile= ()=> {
     const [items, setItems] = useState();
     
     const getItems = (item) => {
         console.log(item, "item")
       axiosWithAuth()
         .post(`/items/additem`, item)
         .then(res => console.log(res, "res"))
         .catch(error => {
           console.log(error.response.message);
         });
     };
    //  useEffect(() => getItems(), []);
    //  console.log(items, "items here");
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

const [deletes, setDelete]= useState();
const deleteItem=(id)=>{
  axiosWithAuth().delete(`https://african-marketplace.herokuapp.com/items/${id}`)
  .then(response => console.log(response) ) 
  .catch(error =>{
      console.log(error.response.message);
  });
  }
console.log(deletes)

   return (
   <div style={{display: 'flex', flexDirection: 'column'}}>
       <AddForm getItems={getItems} />
      {product && product.map((item, i) => {
        return (
          // <Card style={{width: '250px'}}>
          //   <div key={i}> 
          //     <h1 style={{ color: "blue" }}> {item.name}</h1> 
          //     <h1 style={{ color: "blue" }}>{item.description}</h1> 
          //     <h1 style={{ color: "blue" }}>{item.price}</h1>  
          //     <h1 style={{ color: "blue" }}>{item.location}</h1>
              // <button 
              //   style={{backgroundColor: "#e94c3d"}} 
              //   onClick={()=>{return deleteItem(item.id),setTimeout(function(){ document.location.reload();}, 900)}}> Delete 
              // </button>
          //   </div>
          // </Card>
          <Item.Group>
            <Item style={{backgroundColor: "white"}}>
              <Item.Image size="small" src={item.URL} />
              <Item.Content
                verticalAlign="middle"
                style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{width: '50%'}}>
                <Item.Header as="a">{item.name}</Item.Header>
                <Item.Description style={{color: 'black'}}>Description: {item.description}</Item.Description>
                <Item.Description style={{color: 'black'}}>Location: {item.location}</Item.Description>
                <Item.Description style={{color: 'black'}}>Price: {item.price}</Item.Description>
                <Item.Extra>
                  <Icon color="green" name="check" /> 121 Votes
                </Item.Extra>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%'}}>
                <Item.Extra style={{margin: '0 20px'}}>
                  <Button onClick={()=>{return deleteItem(item.id),setTimeout(function(){ document.location.reload();}, 900)}}    color="red" floated='right'>
                    Delete
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </div>
              </Item.Content>
            </Item>
          </Item.Group>
      )  })}
       </div>
   )
}
export default BusinessProfile
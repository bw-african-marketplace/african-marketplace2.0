import React, { useState, useEffect } from "react";
import '../App.css';
import  'semantic-ui-react';
import productInfo from './ProductInfo';
import { Grid, Image } from "semantic-ui-react";
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



   return (
   <div>
       <AddForm getItems={getItems} />

       {/* <Grid>
           <Grid.Row columns={3}>
               {productInfo.map(item => {
                   return (
                   <Grid.Column className='infoGrid'>
                       <Image src= {item.image} />
                           <div className= 'information'>
                               <h3 className= 'product'>{item.name}</h3>
                               <p className= 'id'>Item Code{item.id}</p>
                               <p className= 'price'>Price{item.price}</p>
                               <p className= 'location'>Price{item.location}</p>
                               <p className= 'description'>Description{item.description}</p>
                               <p className= 'rating'>Rating{item.category}</p>
                           </div>
                   </Grid.Column>
                   )})}
               </Grid.Row>
           </Grid> */}
       </div>
   )
}
export default BusinessProfile
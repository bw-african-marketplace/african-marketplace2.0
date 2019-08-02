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
   <div>
       <AddForm getItems={getItems} />
      {product && product.map((item, i) => {return <div key={i}> <h1 style={{ color: "blue" }}> {item.name}</h1> <h1>{item.description}</h1> <h1>{item.price}</h1>  <h1>{item.location}</h1>
      <button style={{backgroundColor: "#e94c3d"}} onClick={()=>{return deleteItem(item.id),setTimeout(function(){ document.location.reload();}, 900)}}> Delete </button>
      </div>  })}

       
       {/* <Grid>
           <Grid.Row columns={3}>
               {productInfo.map(item => {
                   return (
                   <Grid.Column className='infoGrid'>
                       <Image className="grid-pics" src= {item.image} />
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
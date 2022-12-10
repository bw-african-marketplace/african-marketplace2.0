import React, {useEffect, useState} from 'react';
import '../App.css';
import  'semantic-ui-react'
// import productInfo from './ProductInfo'
import { Grid, Image } from "semantic-ui-react"

        
const BusinessProfile = (props) =>{
 console.log(props)

    const [productInfo, setProductInfo] = useState('')
    useEffect(()  => setProductInfo(props.fetchData()))
    console.log(productInfo, 'products')

    return (
    <div>
        <Grid>
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
            </Grid>    
        </div>
    
    )
}

export default BusinessProfile










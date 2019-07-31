import React from 'react'

//  set up a migration to connect to the api via axios
        //get, post, delete, update, get.id

const productInfo = 
[
    {   id: 0,
        name:'Candy wharehouse',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
        price:'price',
        description:'description',
        soldOutItems: 'productsSoldOut',
    },
  
    {   
        id: 1,
        name:'Health House',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 2,
        name:'Willy Wonka',
        image: 'image',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },


    // window.localStorage.setItem = useState()
    // it is to putting the information int
    // window.localStorage.getIem =  useState() 
    //getItem is to fetch/ get the item
    {
        id: 3,
        name:'House Items',
        image: 'image',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 4,
        name:'Fitness',
        image: 'image',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 5,
        name:'Fruit Treats',
        image: 'image',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 6,
        name:'Fruit Treats',
        image: 'image',
        price:'$3.99',
        description:'Fruit treats and sweets',
        soldOutItems: 'productsSoldOut'
    },

]


// { multiple products per company array
//     Name:'Candy wharehouse'
//    [{
//     image: 'https://www.candywarehouse.com/assets/item/regular/mms-milk-chocolate-candy-red-127628.jpg',
//     Price:'price',
//     Description:'description',
//     SoldOutItems: 'productsSoldOut',
//    },
   
//     {
//     image: 'https://www.candywarehouse.com/assets/item/regular/mms-milk-chocolate-candy-red-127628.jpg',
//     Price:'price',
//     Description:'description',
//     SoldOutItems: 'productsSoldOut',
//     }]
    
// },


export default productInfo
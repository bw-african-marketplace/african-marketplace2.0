
//  set up a migration to connect to the api via axios
        //get, post, delete, update, get.id search 

const productInfo = 
[
    {   id: 0,
        name:'Candy wharehouse',
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--5aZs1Oio--/c_scale,f_auto,fl_progressive,q_80,w_800/pmcrcczmk7xma4ybajor.jpg',
        price:'price',
        description:'description',
        soldOutItems: 'productsSoldOut',
    },
  
    {   
        id: 1,
        name:'Clean House',
        image: 'https://blog.saginfotech.com/wp-content/uploads/2018/12/gst-price-household-items.jpg',
        price:'$3.99',
        description:'Clean house, clean mind',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 2,
        name:'Fruit Cake',
        image: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/35705/plantbased-diet-1142x474-c.jpg',
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
        name:'Your Growth',
        image: 'https://ofhousesandtrees.com/wp-content/uploads/2017/06/Gardening-Items-by-Of-Houses-and-Trees-300x300.jpg',
        price:'$3.99',
        description:'Clean house, clean mind',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 4,
        name:'Fitness',
        image: 'http://epmgaa.media.clients.ellingtoncms.com/img/photos/2019/04/26/Fitness_Warrior_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33',
        price:'$19.99 Monthly',
        description:'Build a Strong Body',
        soldOutItems: 'productsSoldOut'
    },

    {
        id: 5,
        name:'Dog Sense',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AwU0wIuZh-HC9cD26ZPBFRWy-ZkB2cHqI9KGznx_-1i4N4Ea',
        price:'$6.99',
        description:'All Dog Go to Heaven',
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
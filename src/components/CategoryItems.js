import React, {useState, useEffect} from 'react';
import { Container, Icon, Image, Item } from 'semantic-ui-react';
import axios from 'axios';

// export const Products = () => {
//   const [product, setProduct] = useState(null);
//   useEffect(() => {
//     const getProducts = () => {
//       axios
//         .get(`https://african-marketplace.herokuapp.com/items`)
//         .then(response => {
//           console.log('Axios Response', response)
//           setProduct(response) 
//       })
//         .catch(error => {
//         console.log(error.response.message)
//       })

//     }, []}) 

//   return

// }

const CategoryItems = (props) => (
  <Container>
  {console.log('props', props)}
    <Item.Group>
      <Item>
        <Item.Image size='small' src='https://picsum.photos/200' />
        <Item.Content verticalAlign="middle" style={{textAlign: 'left'}}>
          <Item.Header as='a'>Product Name</Item.Header>
          <Item.Description>Quick description</Item.Description>
          <Item.Extra>
            <Icon color='green' name='check' /> 121 Votes
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>

  </Container>
)

export default CategoryItems;
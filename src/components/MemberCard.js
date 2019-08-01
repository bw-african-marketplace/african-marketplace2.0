import React, {useState, useEffect} from 'react';
import { Container, Icon, Image, Item } from 'semantic-ui-react';
import axiosWithAuth from './axioAuth';

export default function CategoryItems() {
     const [member, setMember] = useState();
     const setMember = () => {
       axiosWithAuth()
         .get(`/items`)
         .then(response => setMember(response.data))
         .catch(error => {
           console.log(error.response.message);
         });
     };
     useEffect(() => getMembers(), []);
     console.log(member, "Member Inventory");

  return (
    <div>
      {member && member.map(item => {
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
                  <Item.Description style={{color: 'black'}}>Location: {item.category}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Location: {item.name}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Price: {item.desctiption}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Price: {item.price}</Item.Description>
                  <Item.Description style={{color: 'black'}}>Price: {item.location}</Item.Description>
                  <Item.Extra>
                    <Icon color="green" name="topSellingItem" /> Top Sellling Item
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



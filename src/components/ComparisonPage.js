import React from '../../node_modules/react'
import { Container, Icon, Image, Item } from '../../node_modules/semantic-ui-react'

const ComparisonPage = () => (
  <Container>
    <Item.Group>
      <Item>
        <Item.Image size='small' src='https://picsum.photos/200' />
  
        <Item.Content verticalAlign="middle" style={{textAlign: 'left'}}>
          <Item.Header as='a'>Coffee</Item.Header>
          <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Item.Description>
          <Item.Extra>
            <Icon color='green' name='check' /> 121 Votes
          </Item.Extra>
        </Item.Content>
      </Item>
  
      <Item>
        <Item.Image size='small' src='https://picsum.photos/200' />
  
        <Item.Content verticalAlign="middle" style={{textAlign: 'left'}}>
          <Item.Header as='a'>Local Eggs</Item.Header>
          <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Item.Description>
          <Item.Extra>
            <Icon color='green' name='check' /> 121 Votes
          </Item.Extra>
        </Item.Content>
      </Item>
  
      <Item>
        <Item.Image size='small' src='https://picsum.photos/200' />
        <Item.Content verticalAlign="middle" style={{textAlign: 'left'}}>
          <Item.Header as='a'>Wild Honey</Item.Header>
          <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Item.Description>
          <Item.Extra>
            <Icon color='green' name='check' /> 121 Votes
          </Item.Extra>
        </Item.Content>
  
      </Item>
    </Item.Group>
  </Container>
)

export default ComparisonPage;
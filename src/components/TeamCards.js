import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const TeamCards = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>Annique Nsabimana</Card.Header>
        <Card.Meta>Web (UNIT 2 21) Front-End I</Card.Meta>
        <Card.Description>
          Annique is a Fullstack Web Developer based in Dallas,Texas.
  
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
    <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Marcus Jones</Card.Header>
        <Card.Meta>Web (UNIT 2 21) Front-End III</Card.Meta>
        <Card.Description>
        Marcus is a Front-End III Developer based in Oklahoma. 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>Melanie Harris</Card.Header>
        <Card.Meta>Web (UNIT 3 20.75) Front-End III</Card.Meta>
        <Card.Description>Melanie is a Front-End III Developer based in California. </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Kevin Sims</Card.Header>
        <Card.Meta>Web Back-End</Card.Meta>
        <Card.Description>Kevin is a Web Back-End Developer from Dallas, Texas. </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Bryan Szendel</Card.Header>
        <Card.Meta>Web (UNIT 2 21) Front-End II </Card.Meta>
        <Card.Description>Bryan is a Web Front-End Developer from Denver,Colorado. </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>Kemberly Eliscar</Card.Header>
        <Card.Meta>Web Back-End</Card.Meta>
        <Card.Description>Kemberly is a Web Back-End Developer from East Coast Time Zone. </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  </Card.Group>
)
export default TeamCards;
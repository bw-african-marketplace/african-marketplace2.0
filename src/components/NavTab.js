//tab component
import React, { useState } from '../../node_modules/react'
import { Menu, Segment } from '../../node_modules/semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MarketPlace from './UI-Components/MarketPlace'
import BusinessProfile from './BusinessProfile'
import CategoriesPage from './CategoriesPage'
import ComparisonList from './UI-Components/ComparisonList'
import TeamCards from './TeamCards'

const NavTab = (props) => {
  console.log(props)

  //same as set people = props.setPeople
  const { addProduct, buttonText, activeItem } = props

  const [product, setProduct] = useState()
  const handleItemClick = event => {
    event.preventDefault()

  }
  const logo = require("../images/African-Marketplace-logo.png");


  return (

    <div>
      <Route exact path="/MarketPlace" component={MarketPlace} />
      <Route exact path="/OurTeam" component={TeamCards} />
      <Route path="/CategoriesPage" component={CategoriesPage} />
      <Route path="/ComparisonList" component={ComparisonList} />
      <Route exact path="/BusinessProfile" component={BusinessProfile} />
      <Segment>
        <img alt='logo' src={logo} />
      </Segment>
      <Menu pointing>
        <Link to="/"></Link>
        <Menu.Item name='Home'
          active={activeItem === 'home'}
          />
        <Link to="/AboutAfricanMarket">
        <Menu.Item
          name='About African Market'
          active={activeItem === 'about african market'}
          
        /></Link>
        <Link to="/OurTeam">
          <Menu.Item
            name='Our Team'
            active={activeItem === 'Our Team'}
            
          /></Link>
        <Link to="/BusinessProfile">
       
        <Menu.Item
          name='Business Profile'
          active={activeItem === 'businessProfile'}
        
        /> </Link>
        

        <Menu.Menu position='right'>
          <Menu.Item>
            <button icon='search'
              placeholder='Search...'>{buttonText}
            </button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    </div>

  )
}

export default NavTab;
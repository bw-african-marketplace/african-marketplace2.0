//tab component
import React, {useState} from '../../node_modules/react'
import { Menu, Segment } from '../../node_modules/semantic-ui-react'
import { Link } from 'react-router-dom'


const NavTab = (props) =>  {
  console.log(props)

  //same as set people = props.setPeople
    const {addProduct, buttonText, activeItem} = props

    const [product, setProduct ] = useState()
    const handleItemClick = event => {
      event.preventDefault()

    }
    const logo = require("../images/African-Marketplace-logo.png");
    
    
    return (
          <div>
            <div className= 'logo-title-container'>
              <div className='logo-container'>
                <div className='logo-image'></div>
              </div>
            <div className= 'title'>Business Profile</div>
          </div>
          <Menu pointing>
              <Link to="/">
                <Menu.Item name='Home' 
                  active={activeItem === 'home'} 
                />
              </Link>
            
              <Link to="/OurTeam">
                <Menu.Item
                  name='Our Team'
                  active={activeItem === 'about'}
                />
              </Link>
              <Link to="/CategoriesPage">
                <Menu.Item
                   name='Categories'
                 active={activeItem === 'categories'}
                />
              </Link>
              <Link to="/Contact">
                <Menu.Item
                  name='Contact Us'
                  active={activeItem === 'Contact Us'}
                />
              </Link>
              <Link to="/BusinessProfile">
                <Menu.Item
                  name='Business Profile'
                  active={activeItem === 'businessProfile'}
                />
              </Link>
              <Menu.Menu position='right'>

              <Menu.Item>
                <button icon='search'
                   placeholder='Search...'>Search
                </button>
                <input className='searchBox'  Business Profile />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
        
        )
}

export default NavTab;
//tab component
import React, {useState} from 'react'
import { Menu,} from 'semantic-ui-react'
import  '../App.css'



const NavTab = (props) =>  {
  console.log(props)

  //same as set people = props.setPeople
    const {addProduct, buttonText, activeItem} = props

    const [product, setProduct ] = useState()
    const handleItemClick = event => {
      event.preventDefault()

    }
    
    return (
        <div>

          <div className= 'logo-title-container'>
            <div className='logo-container'>
              <div className='logo-image'></div>
            </div>
              <div className= 'title'>Business Profile</div>
          </div>


          <Menu pointing>
              <Menu.Item name='Home' 
                active={activeItem === 'home'} 
                onClick={handleItemClick} />
            
              <Menu.Item
                  name='About'
                active={activeItem === 'about'}
                onClick={handleItemClick}
              />
              <Menu.Item
                  name='Categories'
                active={activeItem === 'categories'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='Contact Us'
                active={activeItem === 'Contact Us'}
                onClick={handleItemClick}
              />
              <Menu.Item className = 'business'
                name='Business Profile'
                active={activeItem === 'businessProfile'}
                onClick={handleItemClick}
              />
              <Menu.Menu position='left'>

              <Menu.Item>
                <button icon='search'
                    placeholder='Search...'>Search
                    
                </button>
                <input className='searchBox'  Business Profile 
                  />
                
                
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          
      <div>

  </div>
</div>
   
      )
}

export default NavTab;  
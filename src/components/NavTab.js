//tab component
import React from "react";
import { Menu } from "semantic-ui-react";
import "../App.css";

const NavTab = (props) => {
  //same as set people = props.setPeople
  const { addProduct, buttonText, activeItem } = props;
  console.log(props);

  return (
    <div>
      <div className="logo-title-container">
        <div className="logo-container">
          <div className="logo-image"></div>
        </div>
        <div className="title">Business Profile</div>
      </div>
      <Menu stackable={true}  pointing>
        <Menu.Item name="Home" active={activeItem === "home"} />
        <Menu.Item name="About" active={activeItem === "about"} />
        <Menu.Item name="Contact Us" active={activeItem === "Contact Us"} />
        <Menu.Item
          className="business"
          name="Business Profile"
          active={activeItem === "businessProfile"}
        />
        <Menu.Menu position="left">
          <Menu.Item>
            <button icon="search" placeholder="Search...">
              Search
            </button>
            <input className="searchBox" Business Profile />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div></div>
    </div>
  );
};

export default NavTab;

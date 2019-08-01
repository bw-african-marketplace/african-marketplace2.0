
// // Checks if user is authenticated. If yes, renders 'component' prop.
// // If no, redirects to '/' (regform component).

// import React from 'react'
// import {Tab, Menu, } from 

// const Nav = props => (
//     <NavLink
//       exact
//       {...props}
//       activeClassName='active'
//     />
// );


// const createLabel = (labelText) => <span>{labelText}</span>


// const homeLabel =createLabel('home', 'Home')
// const homeLabel =createLabel('home', 'Home')
// const homeLabel =createLabel('home', 'Home')
// const homeLabel =createLabel('home', 'Home')







/*--------Original------*/ 

import React from "react";
import { Route, Redirect } from "react-router-dom";





export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);





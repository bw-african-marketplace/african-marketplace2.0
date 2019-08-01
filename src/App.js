import React from '../node_modules/react';
import './App.css';
import {Route, Link} from '../node_modules/react-router-dom';
import MarketPlace from './components/UI-Components/MarketPlace';
import Auth from './components/UI-Components/Auth';
import Contact from "./components/Contact"

// import TeamCards from './components/TeamCards';
import 'semantic-ui-react'

import BusinessProfile from "./components/BusinessProfile";
// import Comparison from "./components/Comparison";
import NavTab from "./components/NavTab";
import "../node_modules/semantic-ui-react";
import CategoriesPage from './components/CategoriesPage';
import ComparisonList from "./components/UI-Components/ComparisonList";
import CategoryItems from "./components/CategoryItems";

import OtherItems from "./components/UI-Components/OtherItems";
import TeamCards from './components/TeamCards'
import Footer from './components/Footer'

// import ComparisonList from './components/UI-Components/ComparisonList';
// import LoginForm from './components/LoginForm';
// import OtherItems from './components/UI-Components/OtherItems';
// import TopImage from './components/UI-Components/TopImage';
// import SearchBar from './components/UI-Components/SearchBar';
// import Info from './components/UI-Components/Info';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Route exact path="/" component={Auth} />
        <NavTab />

        <Route exact path="/MarketPlace" component={MarketPlace} />
        <Route exact path="/CategoriesPage" component={CategoriesPage} />
        <Route exact path="/CategoriesPage/:category" render={(props) => <CategoryItems {...props} />} />

        <Route path="/ComparisonList" component={ComparisonList} />
        <Route exact path="/" component={MarketPlace} />
        <Route exact path="/" component={ComparisonList} />
        <Route exact path="/BusinessProfile" component={BusinessProfile} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/OurTeam" component={TeamCards} />
        <Contact exact path="Contact" component={Contact}/>
        <Route exact path="/CategoryItems" component={CategoryItems} />
        <OtherItems />
        <Footer />
      </div>
    </div>
  );
}

export default App;

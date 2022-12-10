import React from 'react';
import './App.css';
import Comparison from './components/Comparison'
import NavTab from './components/NavTab';
import 'semantic-ui-react'
import BusinessProfile from './components/BusinessProfile'
import axios from 'axios'
import AxiosWithAuth from './components/AxiosWithAuth'

function App() {

  const fetchData = (id) => {
    AxiosWithAuth().get(`/users/${id}/items`)
    .then(response => console.log(response))
    .catch(error => console.log(error.response.message))

  }
  return (
    <div className="App">
      <NavTab />
      <BusinessProfile fetchData = {fetchData} />
     
    </div>
  );
}

export default App;

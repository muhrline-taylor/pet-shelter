import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {Link, Router} from '@reach/router';
import Main from './views/Main';
import AddPet from './views/AddPet';
import ViewPet from "./views/ViewPet";
import UpdatePet from "./views/UpdatePet";


function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1>Pet Shelter</h1>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/pets/new">Add Pet</Link>
      </div>
      <Router>
        <Main path="/"/>
        <AddPet path="/pets/new"/>
        <ViewPet path="pets/:_id" />
        <UpdatePet path="/pets/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;

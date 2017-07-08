import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import PhotoListContainer from './PhotoListContainer';
import { Route, Switch } from 'react-router-dom'

const App = ()=>(
  <div>
    <h1>Header Section Here</h1>
    <Switch>
      <Route path="/photos" component={ PhotoListContainer } />
      <Route exact path="/" component={ Home } />

    </Switch>
  </div>
)

export default App;

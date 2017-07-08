import React from 'react'
// import { HashRouter as Router } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
import PhotoListContainer from './PhotoListContainer';
import PhotoContainer from './PhotoContainer';

const Root = ()=> (
  <div>
    <h1>Header Section Here</h1>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/photos" component={ PhotoListContainer } />
          <Route path="/photo" component={ PhotoContainer } />
        </Switch>
    </BrowserRouter>
  </div>

)

export default Root

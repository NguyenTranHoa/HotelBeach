import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./components/Navbar";

import {
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/rooms">
            <Rooms/>
          </Route>
          <Route exact path="/rooms/:slug" render={(props) => <SingleRoom {...props}/>}>
            
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;

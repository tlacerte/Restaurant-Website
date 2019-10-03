import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Route, Switch } from 'react-router-dom';
//import Reviews from '../../components/Reviews/Reviews';
import Header from '../../components/Header/Header'
//import Menus from '../Menus/Menus'
import Home from '../Home/Home'


library.add(fab)

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() =>
          <Home />
        }/>
        {/* 
        <Reviews /> */}
      </div>
    )
  }
}

export default App;

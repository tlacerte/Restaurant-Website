import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import MenuNav from './components/MenuNav/MenuNav';
import Dinner from './components/Menus/Dinner/Dinner'
import Lunch from './components/Menus/Lunch/Lunch'
import Dessert from './components/Menus/Dessert/Dessert'

library.add(fab)

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <MenuNav />
        <hr />
        <Dinner />
        <Lunch />
        <Dessert />
        <Reviews />
      </div>
    )
  }
}

export default App;

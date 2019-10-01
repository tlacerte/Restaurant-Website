import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import MenuNav from './components/MenuNav/MenuNav';
import Dinner from './components/Menus/Dinner/Dinner'

library.add(fab)

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <MenuNav />
        <hr />
        <Reviews />
        <Dinner />
      </div>
    )
  }
}

export default App;

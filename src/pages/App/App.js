import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Menus from '../Menus/Menus'
import Home from '../Home/Home'
import ReviewsPage from '../ReviewsPage/ReviewsPage'
import ContactPage from '../ContactPage/ContactPage'
import ReservationsPage from '../ReservationsPage/ReservationsPage'


library.add(fab)

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          }/>
          <Route exact path='/menus' render={() =>
            <Menus />
          }/>
          <Route exact path='/reviews' render={() =>
            <ReviewsPage />
          }/>
          <Route exact path='/contact' render={() =>
            <ContactPage />
          }/>
          <Route exact path='/reservations' render={() =>
            <ReservationsPage />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;

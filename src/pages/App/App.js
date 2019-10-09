import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Menus from '../Menus/Menus'
import Home from '../Home/Home'
import ReviewsPage from '../ReviewsPage/ReviewsPage'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import ContactPage from '../ContactPage/ContactPage'
import ReservationsPage from '../ReservationsPage/ReservationsPage'
import OrderPage from '../OrderPage/OrderPage'
import Dinner from '../../components/Menus/Dinner/Dinner';
import Lunch from '../../components/Menus/Lunch/Lunch';
import Dessert from '../../components/Menus/Dessert/Dessert';
import Brunch from '../../components/Menus/Brunch/Brunch';
import Beverages from '../../components/Menus/Beverages/Beverages';
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService';

library.add(fab)

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      reviews: []
    };
  }

  componentDidMount = () => {
    getAll().then(results =>{
      this.setState({
        reviews: [...results]
      })
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddPost = ({ rating, comment }) =>{
    const url = "/api/posts"
    const options = {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({rating, comment})
    }
    handleVerbs(url, options)
  }

  handleDelete = id => {
    let newState = this.state.reviews.filter(item => this.state.reviews[id] !== item)
    this.setState({
      reviews: newState
    })
  }  

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
            <Route exact path='/menus/dinner' render ={() =>
              <>
              <Menus />
              <Dinner />
              </>
            }/>
            <Route exact path='/menus/lunch' render ={() =>
              <>
              <Menus />
              <Lunch />
              </>
            }/>
            <Route exact path='/menus/brunch' render ={() =>
              <>
              <Menus />
              <Brunch />
              </>
            }/>
            <Route exact path='/menus/desserts' render ={() =>
              <>
              <Menus />
              <Dessert />
              </>
            }/>
            <Route exact path='/menus/beverages' render ={() =>
              <>
              <Menus />
              <Beverages />
              </>
            }/>
          <Route exact path='/reviews' render={() =>
            <>
            <ReviewsPage 
              reviews={this.state.reviews}
              handleDelete={this.handleDelete}
            />
            <ReviewForm 
              handleAddPost={this.handleAddPost}
            />
            </>
          }/>
          <Route exact path='/contact' render={() =>
            <ContactPage />
          }/>
          <Route exact path='/reservations' render={() =>
            <ReservationsPage />
          }/>
          <Route exact path='/orderonline' render={() =>
            <OrderPage />
          }/>
          <Route exact path='/signup' render={({history}) =>
            <SignupPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
          <Route exact path='/login' render={({history}) =>
            <LoginPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;

async function getAll(){
  const url = "/api/posts"
  const initialFetch = await fetch(url)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}

async function handleVerbs(url, options){
  const initialFetch = await fetch(url, options)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}
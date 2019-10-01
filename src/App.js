import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Review from './components/Reviews/Reviews';
import Header from './components/Header/Header';

library.add(fab)

class App extends Component {
  state = {
    reviews : [
      {
        rating : 5,
        comment : "iincredible",
        user : "tlacerte"
      },
      {
        rating : 5,
        comment : "so amazing",
        user : "sarahl"
      }
    ]
  }
  



  
  
  render(){
    const composedReviews = this.state.reviews.map((item, index) => {
      return (
        <Review 
          key={index} 
          rating={item.rating}
          comment={item.comment} 
          user={item.user}
          //handleDelete={this.handleDelete}
          //handleUpdate={this.handleUpdate}
          id={index}
        />
      )
    })
    return (
      <div className="App">
        <Header />
        <hr />
        <ul>{composedReviews}</ul>
      </div>
    )
  }
}

export default App;

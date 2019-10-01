import React, { Component } from 'react';
import './App.css';
import Review from './components/Reviews/Reviews';

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
          id={index}
        />
      )
    })
    return (
      <div className="App">
        <h1>Howdy</h1>
        <ul>{composedReviews}</ul>
      </div>
    )
  }
}

export default App;

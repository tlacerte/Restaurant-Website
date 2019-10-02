import React, { Component } from 'react'
import ReviewItems from './ReviewItems'
import './Reviews.css'

class Reviews extends Component {
    state = {
        reviews : [
          {
            rating : 5,
            comment : "iincredible",
            user : "tlacerte"
          }
        ]
      }
    
    render(){
        const composedReviews = this.state.reviews.map((item, index) => {
            return (
              <ReviewItems 
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
            <ul className="review-list">
            {composedReviews}
            </ul>
        )
    }
}

export default Reviews
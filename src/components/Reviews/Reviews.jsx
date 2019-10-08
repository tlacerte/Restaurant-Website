import React, { Component } from 'react'
import ReviewItems from './ReviewItems'
import AuthButtons from '../AuthButtons/AuthButtons'
import './Reviews.css'

class Reviews extends Component {
    render(){
        const composedReviews = this.props.reviews.map((item, index) => {
            return (
              <ReviewItems 
                key={index} 
                rating={item.rating}
                comment={item.comment} 
                //handleDelete={this.handleDelete}
                //handleUpdate={this.handleUpdate}
                id={index}
              />
            )
          })
        return (
          <>
            <h3>Login to write a review:</h3>
            <AuthButtons />
            <ul className="review-list">
            {composedReviews}
            </ul>
          </>
        )
    }
}

export default Reviews
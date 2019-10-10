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
                handleDelete={this.props.handleDelete}
                handleUpdate={this.props.handleUpdate}
                id={index}
              />
            )
          })
        return (
          <>
            <AuthButtons 
              user={this.props.user}
              />
            <ul className="review-list">
              {composedReviews}
            </ul>
          </>
        )
    }
}

export default Reviews
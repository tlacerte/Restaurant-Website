import React from 'react'
import Reviews from '../../components/Reviews/Reviews'

const ReviewPage = ({reviews, handleDelete}) => {
    return (
        <Reviews 
            reviews={reviews}
            handleDelete={handleDelete}
        />
    )
}

export default ReviewPage
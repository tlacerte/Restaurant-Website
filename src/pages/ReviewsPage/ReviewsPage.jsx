import React from 'react'
import Reviews from '../../components/Reviews/Reviews'

const ReviewPage = ({reviews, handleDelete, user}) => {
    return (
        <Reviews 
            user={user}
            reviews={reviews}
            handleDelete={handleDelete}
        />
    )
}

export default ReviewPage
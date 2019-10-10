import React from 'react'
import Reviews from '../../components/Reviews/Reviews'

const ReviewPage = ({reviews, handleDelete, user, email, handleLogout}) => {
    return (
        <Reviews 
            user={user}
            reviews={reviews}
            handleDelete={handleDelete}
            email={email}
            handleLogout={handleLogout}
        />
    )
}

export default ReviewPage
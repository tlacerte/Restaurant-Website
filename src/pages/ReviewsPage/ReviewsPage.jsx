import React from 'react'
import Reviews from '../../components/Reviews/Reviews'

const ReviewPage = ({reviews, handleDelete, user, email}) => {
    return (
        <Reviews 
            user={user}
            reviews={reviews}
            handleDelete={handleDelete}
            email={email}
        />
    )
}

export default ReviewPage
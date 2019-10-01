import React from 'react'
import PropTypes from 'prop-types'

const Review = ({rating, comment, user, handleDelete, id}) => {
    return (
        <li>
            <h3>{rating}</h3>
            <p>{comment}</p>
            <h6>{user}</h6>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}

export default Review 

Review.propTypes = {
    rating: PropTypes.number,
    comment: PropTypes.string,
    user: PropTypes.string,
    handleDelete: PropTypes.func,
    id: PropTypes.string
}
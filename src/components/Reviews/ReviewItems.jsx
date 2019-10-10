import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const editIcon = <FontAwesomeIcon icon={faEdit} />
const deleteIcon = <FontAwesomeIcon icon={faTrash} />

const Review = ({rating, comment, handleDelete, handleUpdate, id, user, itemEmail}) => {
    
    let emailMatch = null

    if (user){
        emailMatch = (user.email===itemEmail) ?
            <>
            <button onClick={() => handleDelete(id)}>{deleteIcon}</button>
            <button onClick={() => handleUpdate(id)}>{editIcon}</button>
            </>
            :
            null
            
    }

    return (
        <li>
            <div className="review-item">
                <h4>{rating}/5</h4>
                <p>{comment}</p>
                <div>{emailMatch}</div>
            </div>
        </li>
    )
}

export default Review 

Review.propTypes = {
    rating: PropTypes.number,
    comment: PropTypes.string,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
    id: PropTypes.string
}
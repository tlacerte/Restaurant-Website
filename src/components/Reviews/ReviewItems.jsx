import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const editIcon = <FontAwesomeIcon icon={faEdit} />
const deleteIcon = <FontAwesomeIcon icon={faTrash} />

const Review = ({rating, comment, handleDelete, handleUpdate, id}) => {
    // const handleEmailMatch = () => {
    //     if ()
    // }
    
    return (
        <li className="card">
            <div className="card-body">
                <h4 className="card-title">{rating}/5</h4>
                <p className="card-text">{comment}</p>
                <button className="card-link" onClick={() => handleDelete(id)}>{deleteIcon}</button>
                <button className="card-link" onClick={() => handleUpdate(id)}>{editIcon}</button>
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
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const editIcon = <FontAwesomeIcon icon={faEdit} />
const deleteIcon = <FontAwesomeIcon icon={faTrash} />

const Review = ({rating, comment, handleDelete, handleUpdate, id}) => {
    return (
        <li>
            <h3>{rating}</h3>
            <p>{comment}</p>
            <button onClick={() => handleDelete(id)}>{deleteIcon}</button>
            <button onClick={() => handleUpdate(id)}>{editIcon}</button>
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
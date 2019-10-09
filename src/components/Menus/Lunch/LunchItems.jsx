import React from 'react';
import PropTypes from 'prop-types'

const LunchItems = ({item, details, price}) => {
    return (
        <li>
            <p>
            <span className="menu-title">{item} </span><span className="menu-detail">{details} </span><span className="menu-price">${price}</span>
            </p>
        </li>
    )
}

export default LunchItems;

LunchItems.propTypes = {
    item: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.number,
}
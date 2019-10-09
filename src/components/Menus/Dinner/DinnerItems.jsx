import React from 'react';
import PropTypes from 'prop-types'

const DinnerItems = ({item, details, price}) => {
    return (
        <li>
            <p>
            <span className="menu-title">{item} </span><span className="menu-detail">{details} </span><span className="menu-price">${price}</span>
            </p>
        </li>
    )
}

export default DinnerItems;

DinnerItems.propTypes = {
    item: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.number,
}
import React from 'react';
import PropTypes from 'prop-types'

const DessertItems = ({item, details, price}) => {
    return (
        <li>
            <h3>{item}</h3>
            <p>{details}</p>
            <h6>${price}</h6>
        </li>
    )
}

export default DessertItems;

DessertItems.propTypes = {
    item: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.number,
}
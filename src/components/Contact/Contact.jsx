import React from 'react'
import Hours from './Hours'
import Map from '../Map/Map'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <h1>Contact Us</h1>
            <h3>Hours</h3>
                <Hours />
            <h3>Events</h3>
            <h3>Address</h3>
            <Map />
        </>
    )
}

export default Contact
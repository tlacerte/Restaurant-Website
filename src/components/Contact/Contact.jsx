import React from 'react'
import Hours from './Hours'
import Map from '../Map/Map'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <Hours />
            <div className="map-center">
                <Map />
            </div>
        </div>
    )
}

export default Contact
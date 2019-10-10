import React from 'react'
import Hours from './Hours'
import Map from '../Map/Map'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <Hours />
            <h4>Events and Large Parties</h4>
            <p>Please email dayoldpizza@email.com</p>
            <h4>Address</h4>
            <p>Austin, TX</p>
            <div className="map-center">
                <Map />
            </div>
        </div>
    )
}

export default Contact
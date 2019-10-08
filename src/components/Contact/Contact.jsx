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
            <div className="map-center">
                <Map />
            </div>

        </>
    )
}

export default Contact
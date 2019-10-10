import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className='home-logo'>Day Old Pizza</h1>
            <h4 className="home-description">
                Everyone knows pizza tastes the best when you reheat it the next day. 
                <br/><br/>That is why, at <b>Day Old Pizza</b>, we cook all of our pizzas the day before and reheat them to serve to you. 
                <br/><br/>Our special refrigerators marinate the fumes all together to build on the pizza taste.
                <br/><br/>It may seem weird, but that is what makes it so delicious.
            </h4>
        </div>
    )
}

export default HomePage
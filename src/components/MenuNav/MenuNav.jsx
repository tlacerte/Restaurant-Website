import React from 'react'
import './MenuNav.css'

const MenuNav = () =>{
    return (
        <div>
            <ul className="menu-nav">
                <li className="menu-nav-link">Dinner</li>
                <li className="menu-nav-link">Lunch</li>
                <li className="menu-nav-link">Brunch</li>
                <li className="menu-nav-link">Dessert</li>
                <li className="menu-nav-link">Beverages</li> 
            </ul>
        </div>
    )
}

export default MenuNav
import React from 'react'
import './MenuNav.css'
import { Link } from 'react-router-dom';

const MenuNav = () =>{
    return (
        <div>
            <ul className="menu-nav">
                <li>
                    <Link className="menu-nav-link" to='/menus/dinner'>Dinner</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="menu-nav-link" to='/menus/lunch'>Lunch</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="menu-nav-link" to='/menus/brunch'>Brunch</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="menu-nav-link" to='/menus/desserts'>Desserts</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="menu-nav-link" to='/menus/beverages'>Beverages</Link>
                </li> 
            </ul>
        </div>
    )
}

export default MenuNav
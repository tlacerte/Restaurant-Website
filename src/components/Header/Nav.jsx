import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to='/menus'>Menus</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="nav-link" to='/reviews'>Reviews</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="nav-link" to='/reservations'>Reservations</Link>
                </li>
                <li>|</li>
                <li>
                    <Link className="nav-link order-link" to='/orderonline'>Order Online</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav
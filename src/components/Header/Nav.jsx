import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to='/menus'>Menus</Link>
                </li>
                <li>
                    <Link className="nav-link" to='/reviews'>Reviews</Link>
                </li>
                <li>
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link className="nav-link" to='/reservations'>Reservations</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav
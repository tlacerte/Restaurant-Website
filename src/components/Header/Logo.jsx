import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link className="logo" to='/'><h1 className="logo">Day Old Pizza</h1></Link>
        </div>
    )
}

export default Logo;
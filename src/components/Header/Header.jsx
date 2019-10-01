import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

import './Header.css'

const Header = () => {
    return (
        <div className="App-header">
            <Logo />
            <Nav />
            <SocialLinks />
        </div>
    )
}

export default Header
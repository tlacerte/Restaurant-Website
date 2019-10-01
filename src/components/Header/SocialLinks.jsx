import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const facebookIcon = <FontAwesomeIcon icon={['fab', 'facebook']} />
const instagramIcon = <FontAwesomeIcon icon={['fab', 'instagram']} />
const twitterIcon = <FontAwesomeIcon icon={['fab', 'twitter']} />

const SocialLinks = () => {
    return (
        <div>
            <ul className="social-links">
                <li className="social-link"><a href="https://www.facebook.com/">{facebookIcon}</a></li>
                <li className="social-link"><a href="https://www.instagram.com/">{instagramIcon}</a></li>
                <li className="social-link"><a href="https://www.twitter.com/">{twitterIcon}</a></li>
            </ul>
        </div> 
    )
}

export default SocialLinks
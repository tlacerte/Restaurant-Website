import React from 'react'
import { Link } from 'react-router-dom';

const AuthButtons = (props) => {
    let buttons = props.user ?
        <div>
            <span>Welcome, {props.user.name}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/reviews' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
        :
        <div>
            <h3>Login to write a review:</h3>
            <Link to='/login'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/signup'>SIGN UP</Link>
        </div>
    
    return (
        <div className="auth">
            {buttons}
        </div>
    );
};

export default AuthButtons
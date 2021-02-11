import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser}) => {
    const display = currentUser ? (
        <h3>Hi, we'll put the home page here eventually</h3>
    ) : (
        <div className="splash-nav">
            <Link id="login" to="/login">Log In</Link>
            <Link id="signup" to="/signup">Try For Free</Link>
        </div>
    )

    return display;
}
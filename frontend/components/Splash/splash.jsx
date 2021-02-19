import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default ({currentUser}) => {
    const display = currentUser ? (
        <Redirect to="/home" />
    ) : (
        <div className="splash-page-box">
            <div className="splash-nav">
                <div className="splash-nav-left">
                        <Link to="/"><img src={window.whatsanaLogo} /></Link>
                </div>

                <div className="splash-nav-right">
                    <Link id="login" to="/login">Log In</Link>
                    <Link id="signup" to="/signup">Try For Free</Link>
                </div>
            </div>
        </div>
    )

    return display;
}
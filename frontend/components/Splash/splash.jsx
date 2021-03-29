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
            <div className="splash-main-page">
                <div className="splash-text-box">
                    <div className="splash-heading">
                        <h1>Hi! Welcome to Whatsana, a website clone of Asana.</h1>
                    </div>
                    <div className="splash-description">
                        <h2>
                            From the small stuff to the big picture, Whatsana
                            helps your team organize work and get stuff done.
                        </h2>
                    </div>
                    <div className="splash-signup">
                        <Link id="signup" to="/signup">Try For Free</Link>
                    </div>
                </div>
                <div className="splash-img-box">
                    
                </div>
            </div>
            
        </div>

    )

    return display;
}
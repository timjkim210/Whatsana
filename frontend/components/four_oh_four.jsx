import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = (props) => {
        return (
            <div className="fouroh-page-box">

                <div className="fouroh-main">
                    <h1>This page is lost in space!</h1>
                    <h2>We can't find what you're looking for, but the links below may help.</h2>
                    <img src={window.four_oh_img}/>
                </div>

                <div className="fouroh-links">
                    <div className="fouroh-link-item">
                        <p>Your team's tasks and conversations</p>
                        <br/>
                        <Link to="/">Go to Asana</Link>
                    </div>
                        
                    <div className="fouroh-link-item">
                        <p>Support articles, videos, and suggested ways to use Asana</p>
                        <br/>
                        <a href="https://asana.com/guide">Visit the Guide</a>
                    </div>
                        
                    <div className="fouroh-link-item">
                        <p>News and updates from the Asana team</p>
                        <br/>
                        <a href="https://blog.asana.com/">Read our Blog</a>
                    </div>

                    <div className="fouroh-link-item">
                        <p>Real-time status updates about the Asana app</p>
                        <br/>
                        <a href="https://trust.asana.com/">Check Status</a>
                    </div>
                </div>



            </div>
        )
}

export default FourOhFour;
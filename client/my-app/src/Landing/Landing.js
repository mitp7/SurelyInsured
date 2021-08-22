import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default () => { 
    return (
        <div className="body">
            <div className="main main--background">
                <h1 className="main__title">Let data drive your car insurance pricing decisions.</h1>
                <p className="main__intro">We take your clients' locations and give you recommendations and relevant data so you can make better pricing decisions.</p>
                <p>
                    <Link to="/app" className="btn btn--primary">Try it now</Link>
                    <a href="https://youtu.be/rqQOwtTWHMk" className="btn btn--outline">Demo Video</a>
                </p>
                <div className="space-holder">
                </div>
            </div>
        </div>
    )
}

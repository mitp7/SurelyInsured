import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default () => { 
    return (
        <div className="body">
            <div className="main main--background">
                <h1 className="main__title">Are you insured?</h1>
                <p className="main__intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>
                    <Link to="/app" className="btn btn--primary">Go to app</Link>
                    <a href="" className="btn btn--outline">Demo</a>
                </p>
                <div className="space-holder">
                </div>
            </div>
        </div>
    )
}
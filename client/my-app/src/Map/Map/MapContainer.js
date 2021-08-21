import React from 'react';

import Map from './Map.js';
import './index.css';

export default (props) => { 

    return (
        <div class='map-container'>
            <Map center={props.center}/>
        </div>
    )
}
import React from 'react';

import Map from './Map.js';
import './index.css';

export default (props) => { 

    return (
        <div class='map-container'>
            <Map key={props.center} center={props.center}/>
        </div>
    )
}
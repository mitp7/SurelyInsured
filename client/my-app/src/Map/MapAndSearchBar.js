import React from 'react';

import MapContainer from './Map/MapContainer';
import SearchBar from './SearchBar/SearchBar';

export default () => { 
    return (
        <div>
            <SearchBar/>
            <MapContainer/>
        </div>
    )
}
import React, {useState} from 'react';

import MapContainer from './Map/MapContainer';
import SearchBar from './SearchBar/SearchBar';

export default () => { 

    const [center, setCenter] = useState({lat: 20, lng: 1});

    // On SearchBar submit, update the center state's lattitude and longtitude
    const onSubmit = (event) => {
        setCenter({lat: 1, lng: 7})
    }

    return (
        <div>
            <SearchBar/>
            <MapContainer key={center} center={center}/>
            <button onClick={onSubmit}>Test click</button>
        </div>
    )
}
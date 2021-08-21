import React, {useState} from 'react';

import MapContainer from './Map/MapContainer';
import SearchBar from './SearchBar/SearchBar';

export default () => { 

    // On SearchBar submit, update the center state's lattitude and longtitude
    const onSubmit = (event) => {
         
        console.log();
    }

    const [center, setCenter] = useState({lat: 10.99835602, lng: 77.01502627});

    return (
        <div>
            <SearchBar/>
            <MapContainer center={center}/>
        </div>
    )
}
import React, {useState} from 'react';

import MapContainer from './Map/MapContainer';
import SearchBar from './SearchBar/SearchBar';

import * as api from '../api';


export default () => { 

    const [center, setCenter] = useState({lat: 20, lng: 1});

    // On SearchBar submit, update the center state's lattitude and longtitude
    const onSubmit = async (location) => {
        try {
            const centerApi = await api.getLatLngFromAddress(location); 
            const lat = centerApi.lat;
            const lng = centerApi.lng;
            console.log(`from component: lat: ${lat} lng: ${lng}`);
            setCenter({lat, lng});
        } catch (error) { 
            console.log(error);
        }
    }

    return (
        <div>
            <h1>{center.lat}{" "}{center.lng}</h1>
            <SearchBar onSubmit={onSubmit}/>
            <MapContainer key={center} center={center}/>
        </div>
    )
}
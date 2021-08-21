import React, {useState} from 'react';

import MapContainer from './Map/MapContainer';
import SearchBar from './SearchBar/SearchBar';

import * as api from '../api';


export default () => { 

    const [center, setCenter] = useState({lat: 20, lng: 1});

    // On SearchBar submit, update the center state's lattitude and longtitude
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            center = await api.getLatLngFromAddress(event.value); 
            setCenter(center);
        } catch (error) { 
            console.log(error);
        }
    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            <MapContainer key={center} center={center}/>
        </div>
    )
}
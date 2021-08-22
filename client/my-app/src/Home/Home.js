import React, {useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import MapAndSearchBar from '../Map/MapAndSearchBar.js';
import DataDisplay from '../DataDisplay/DataDisplay.js';
import './index.css';
import * as api from '../api';

var Home = () => { 

    const [center, setCenter] = useState({lat: 43.653226, lng: -79.3831843}); // default latitude and longitude values
    const [dataToDisplay, setDataToDisplay] = useState({});

    // When user submits, update the map center and data displays
    const onSubmit = async (location) => {
        try {
            const centerApi = await api.getLatLngFromAddress(location); 
            const lat = centerApi.lat;
            const lng = centerApi.lng;
            console.log(`from component: lat: ${lat} lng: ${lng}`);
            setCenter({lat, lng});
            const { data } = await api.getDataFromLatLng({lat, lng});
            setDataToDisplay(data);
        } catch (error) { 
            console.log(error);
        }
      }

    return (
    <Container className="home-container">
        <Row>
            <Col xs={12} md={6} className="map-box">
                <MapAndSearchBar center={center} onSubmit={onSubmit}/>
            </Col>
            <Col xs={12} md={6} className="data-box">
                <DataDisplay data={dataToDisplay}/>
            </Col>
        </Row>
    </Container> 
    )
}

export default Home;
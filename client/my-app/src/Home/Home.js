import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import MapAndSearchBar from '../Map/MapAndSearchBar.js';
import DataDisplay from '../DataDisplay/DataDisplay.js';
import './index.css';

var Home = () => { 
    return (
    <Container className="home-container">
        <Row>
            <Col xs={12} md={6} className="map-box">
                <MapAndSearchBar/>
            </Col>
            <Col xs={12} md={6} className="data-box">
                <DataDisplay/>
            </Col>
        </Row>
    </Container> 
    )
}

export default Home;
import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import MapContainer from '../Map/Map/MapContainer.js';
import './index.css';

export default () => { 
    return (
    <Container className="home-container">
        <Row>
            <Col xs={12} md = {6} className="map-box">
                <MapContainer/>
            </Col>
            <Col xs={12} md = {6} className="data-box">
                Data Display
            </Col>
        </Row>
    </Container> 
    )
}
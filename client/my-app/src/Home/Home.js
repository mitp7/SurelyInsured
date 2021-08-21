import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import MapAndSearchBar from '../Map/MapAndSearchBar.js';

import './index.css';

export default () => { 
    return (
    <Container className="home-container">
        <Row>
            <Col xs={12} md = {6} className="map-box">
                <MapAndSearchBar/>
            </Col>
            <Col xs={12} md = {6} className="data-box">
                Data Display
            </Col>
        </Row>
    </Container> 
    )
}
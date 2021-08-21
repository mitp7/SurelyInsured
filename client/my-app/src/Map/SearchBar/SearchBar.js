import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './index.css'

export default (props) => { 
    return (
    <div> 
        <Form className="form" onSubmit={props.onSubmit}>
            <Form.Label>Enter location: </Form.Label>
            <Row> 
                <Col xs={12} md={9}>
                    <Form.Control type="text" placeholder="location" />
                </Col>
                <Col xs={12} md={3}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
            <Form.Text className="text-muted">
                We'll never share your address with anyone.
            </Form.Text>
        </Form>
    </div>
    )
}
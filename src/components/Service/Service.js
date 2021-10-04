import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    return (
        <Col className='service-col'>
      <Card className='service-card'>
        <Card.Img variant="top" src={props.serviceImg} />
        <Card.Body className='card-body'>
          <Card.Title>{props.serviceName}</Card.Title>
          <Card.Text>
          Price: $ {props.servicePrice}
          </Card.Text>
          <Button variant="primary">Purchase Now</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;
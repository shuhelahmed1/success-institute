import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeComponents.css';

const HomeComponents = (props) => {
    return (
        <Col>
      <Card className='home-card'>
        <Card.Img variant="top" src={props.homeComponentImg} />
        <Card.Body>
          <Card.Title>Course: {props.homeComponentName}</Card.Title>
          <Card.Text>
          Course fee: ${props.homeComponentPrice}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
    );
};

export default HomeComponents;
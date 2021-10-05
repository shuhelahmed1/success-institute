import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './About.css';

const About = (props) => {
    return (
            <Col>
            <Card className='about-card'>
              <Card.Img src={props.aboutImg} variant="top"/>
              <Card.Body>
                <Card.Title>Name: {props.aboutName}</Card.Title>
                <Card.Text>Experience: {props.aboutExperience} years</Card.Text>
              </Card.Body>
            </Card>
          </Col>     
    );
};

export default About;
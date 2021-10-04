import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import About from '../About/About';

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState([]);
    useEffect( ()=>{
        fetch('./aboutUs.json')
        .then(res => res.json())
        .then(data => setAboutUs(data))
    } , [])
    return (
        <div className='mt-3 mb-3'>
            <h1>Meet our tutors</h1>
            <Row xs={1} md={2} className="g-4 w-75 m-auto">
            {
                aboutUs.map(about=><About
                     aboutName={about.name}
                     aboutExperience={about.experience}
                     aboutImg={about.img}
                     ></About>)
            }
        </Row>
        </div>
    );
};

export default AboutUs;
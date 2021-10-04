import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div className='services-section'>
            {
                services.map(service => <Service serviceName={service.name}
                serviceImg={service.img}
                servicePrice={service.price}></Service>)
            }
        </div>
    );
};

export default Services;
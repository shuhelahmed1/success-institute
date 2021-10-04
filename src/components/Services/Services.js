import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div>
            {
                services.map(service => <Service serviceName={service.name}></Service>)
            }
        </div>
    );
};

export default Services;
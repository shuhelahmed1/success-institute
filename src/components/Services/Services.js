import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./servicesData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } , [])
    return (
        <div>
            {
                services.map(service => <Service key={service.key}
                serviceName={service.name}></Service>)
            }
        </div>
    );
};

export default Services;
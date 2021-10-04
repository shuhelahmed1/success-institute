import React from 'react';
import './Service.css';

const Service = (props) => {
    return (
        <div className='service-section'>
            <img src={props.serviceImg} alt="" />
            <h2>{props.serviceName}</h2>
            <h2>Price: $ {props.servicePrice}</h2>
        </div>
    );
};

export default Service;
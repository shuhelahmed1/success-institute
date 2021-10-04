import React from 'react';
import './HomeComponents.css';

const HomeComponents = (props) => {
    return (
        <div className='home-components'>
            <div>
            <img src={props.homeComponentImg} alt="" />
            </div>
           <div>
            <h2>Course: {props.homeComponentName}</h2>
            <h3>Course fee: ${props.homeComponentPrice}</h3>
           </div>
        </div>
    );
};

export default HomeComponents;
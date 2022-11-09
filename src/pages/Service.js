import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    console.log(service)
    
    return (
        <div>
            <h2> service:{service.name}</h2>
        </div>
    );
};

export default Service;
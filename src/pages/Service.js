import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    const { img, name, description, rating, price } = service;
    
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default Service;
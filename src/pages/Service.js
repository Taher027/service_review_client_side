import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = () => {
    const service = useLoaderData();
    const { img, name, description, rating, price } = service;
    
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <div className="foo">

                            <PhotoView src={img}>
                                <img src={img} alt="Shoes" className="rounded-xl " />
                            </PhotoView>

                        </div>
                    </PhotoProvider>


                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>{description}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div className="service_section">
                <h2>write your reviews:</h2>
            </div>
        </div>
    );
};

export default Service;
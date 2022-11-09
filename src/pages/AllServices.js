import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = ({ service }) => {
    const { _id, img, price, name, description, rating } = service;
    return (
        <div className="card bg-base-100 text-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Rating:{rating}</p>
                <p>Price:{price}</p>
                <p>{description.slice(0, 100)}....</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;
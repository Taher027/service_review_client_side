import React, { useContext } from 'react';
import {useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AllReviews from './AllReviews';

const Service = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, img, name, description, rating, price } = service;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const photo = user?.photoURL || 'user not set photo';
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            service: _id,
            name: name,
            email,
            photo,
            rating,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review is  placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }







    
    
    return (
        <div className='mb-10 p-6'>
            <div class="card lg:card-side bg-base-100 shadow-xl mr-6">
                <figure>
                    <PhotoProvider>
                        <div className="foo mr-6">

                            <PhotoView src={img}>
                                <img src={img} alt="Shoes" className="rounded-xl " />
                            </PhotoView>

                        </div>
                    </PhotoProvider>


                </figure>
                <div ClassName="card-body text-white ml-6">
                    <h2 ClassName="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>{description}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div className="service_section">
                <h2 className='text-white text-2xl mt-10'>Here are The Reviews</h2>
                <AllReviews></AllReviews>


            <h2 className='text-2xl text-white'>Please add your Review</h2>
                <form onSubmit={handleReview} className="mt-10">
                
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" required placeholder="name" className="input input-ghost w-full  input-bordered" />
                        <input name="rating" type="number" required placeholder="Rating" className="input input-ghost w-full  input-bordered" required />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-20 w-full mt-4" placeholder="Your Message" required></textarea>

                    <input className='btn btn-primary mt-4' type="submit" value="Submit Review" />
                </form>


            </div>
        </div>
    );
};

export default Service;
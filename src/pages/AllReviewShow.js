import React, { useContext } from 'react';
import userlogo from '../assets/userIcon.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const AllReviewShow = ({ review }) => {
    const { name, photoURL, rating, message } = review; 
    const { user } = useContext(AuthContext);

    return (
        <div className="card-body items-center text-center text-white text-sm">
            <div>
                <h2 className="card-title">Name: {name}</h2>
                {
                    user ? <img src={user.photoURL} alt="" /> : <img className='w-1/5 rounded-lg' src={userlogo} alt="" />
                }
            </div>
            <div>
                <p>Rating: {rating}</p>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default AllReviewShow;
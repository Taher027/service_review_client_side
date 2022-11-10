import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import userlogo from '../assets/userIcon.png'

const MyReviewPage = ({ data }) => {
    const user = useContext(AuthContext)
    const { name, rating, message, } = data;
    return (
        <div>
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
        </div>
    );
};

export default MyReviewPage;
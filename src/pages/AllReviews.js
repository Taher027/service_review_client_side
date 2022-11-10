import React, { useEffect, useState } from 'react';
import AllReviewShow from './AllReviewShow';

const AllReviews = () => {

    
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
        
    },[])
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                reviews.map(review => <AllReviewShow
                    key={review._id}
                    review={review}
                ></AllReviewShow>
                    
            )}

        </div>
    );
};

export default AllReviews;
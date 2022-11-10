import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyReviewPage from './MyReviewPage';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setData(data))
    },[user?.email])

    return (
        <div>
            {
                data.map(singleData => <MyReviewPage
                    key={singleData._id}
                    singleData={singleData}
                >


                </MyReviewPage>)
            }
        </div>
    );
};

export default MyReview;
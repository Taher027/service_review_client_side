import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from './hooks/useTitle';
import MyReviewPage from './MyReviewPage';

const MyReview = () => {
    useTitle('My-Review')
    const { user } = useContext(AuthContext);

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://taher-alpha.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setData(data))
    },[user?.email])

    return (
        <div>
            {
                data.map(d => <MyReviewPage
                    key={d._id}
                    review={d}
                ></MyReviewPage>

                )}
        </div>
    );
};

export default MyReview;
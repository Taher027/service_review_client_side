import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from './hooks/useTitle';
import MyReviewPage from './MyReviewPage';

const MyReview = () => {
    useTitle('My-Review')
    const { user } = useContext(AuthContext);

    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch(`https://taher-alpha.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setData(data))
    },[user?.email])

    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
            {
                datas.map(data => <MyReviewPage
                    key={data._id}
                    data={data}
                ></MyReviewPage>

                )}
        </div>
    );
};

export default MyReview;
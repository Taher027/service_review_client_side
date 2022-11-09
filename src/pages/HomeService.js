import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServicesCard from './HomeServicesCard';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
        .then(data=>setServices(data) )
    })
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-orange text-white pt-6'>Services I provide</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeServicesCard
                    
                        key={service._id}
                        service = {service}
                    >

                    </HomeServicesCard>)
                }
            </div>
            <div className=' flex justify-center'>
                <Link className='' to={'/services'}>
                    <button className='btn btn-primary mt-4 mb-4'>SEE ALL</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeService;
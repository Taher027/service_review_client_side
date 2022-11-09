import React, { useEffect, useState } from 'react';
import HomeServicesCard from './HomeServicesCard';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myservices')
            .then(res => res.json())
        .then(data=>setServices(data) )
    })
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-orange'>Services I provide</h2>
            </div>
            <div>
                {
                    services.map(service => <HomeServicesCard
                    
                        key={service._id}
                        service = {service}
                    >

                    </HomeServicesCard>)
                }
            </div>
        </div>
    );
};

export default HomeService;
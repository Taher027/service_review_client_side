import React, { useEffect, useState } from 'react';
import AllServices from './AllServices';
import useTitle from './hooks/useTitle';

const Services = () => {

    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://taher-alpha.vercel.app/services')
            .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <AllServices
                    key={service._id}
                    service = {service}
                
                > </AllServices>)
            }
           
        </div>
    );
};

export default Services;
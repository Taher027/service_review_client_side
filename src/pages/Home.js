import React from 'react';
import Banner from './Banner';
import HomeService from './HomeService';
import photo from '../assets/photoGrapher.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService> </HomeService>
            <div className='grid lg:grid-cols-2 mt-6'>
                <div className="left">
                    <img className='rounded p-5' src={photo} alt="img" />
                </div>
                <div className="right">
                    <h2 className='text-2xl text-white p-5'>Bringing out the best</h2>
                    <p className='text-1xl text-white p-5'>A great photo is your to build a lasting impression and rush you ahead of the competition.</p>
                    <Link to={'/login'}><button className='btn btn-primary ml-5'>Get Your Own</button></Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div className="left">
                    <h2>hello</h2>
                </div>
                <div className="right"> <h2>bye</h2></div>
            </div>
        </div>

    );
};

export default Home;
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
                    <img className=' p-5' src={photo} alt="img" />
                </div>
                <div className="right">
                    <h2 className='text-2xl text-white p-5'>Bringing out the best</h2>
                    <p className='text-1xl text-white p-5'>A great photo is your to build a lasting impression and rush you ahead of the competition.</p>
                    <Link to={'/login'}><button className='btn btn-primary ml-5'>Get Your Own</button></Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div className="mt-6">
                    <h2 className='text-2xl text-white p-5'>Feel free to Contact Me</h2>
                </div>
                <div className="right">

                    <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
                        </div>
                        <div className="mb-6">
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Your message"/>
                            
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Home;
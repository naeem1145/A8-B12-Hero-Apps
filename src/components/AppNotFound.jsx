import React from 'react';
import appError from '../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center '>
                <img src={appError} alt="app error" />
                <div className='text-center py-9'>
                    <h1 className='text-xl md:text-4xl font-bold flex gap-3 items-center justify-center '>OPPS!! APP <span className='text-red-500'>NOT</span> FOUND </h1>
                    <p className='text-gray-500 mt-3 '>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>

            <Link to='/' className='btn  mt-20 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5'>Go Back!</Link>
        </div>
    );
};

export default AppNotFound;
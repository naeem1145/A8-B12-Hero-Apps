import React from 'react'
// import { useRouteError } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pageError from '../assets/error-404.png'
import { Link } from 'react-router'

const ErrorPage = () => {
    // const error = useRouteError()

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12  '>
                <div className='flex flex-col justify-center items-center '>
                    <img src={pageError} alt="app error" />
                    <div className='text-center '>
                        <h1 className='text-4xl font-bold flex gap-3 items-center justify-center '>Oops, page not found!</h1>
                        <p className='text-gray-500 mt-3 '>The page you are looking for is not available.</p>
                    </div>
                </div>

                <Link to='/' className='btn  m-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Go Back!</Link>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage
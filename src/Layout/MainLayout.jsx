import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
       <div className='flex flex-col min-h-screen  '>
      <Navbar />
      <div className='max-w-7xl  mx-auto w-full  py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default MainLayout;

import React from 'react';
import playStore from '../assets/playStore.png'
import appStore from '../assets/AppStore.png'
import heroImage from '../assets/hero.png'
const HeroSection = () => {
    return (
        <div className='flex flex-col justify-center items-center  gap-5'>

            {/* hero section 1 */}
            <div className='flex flex-col justify-center items-center p-2 md:p-10 gap-5'>
                <div className='text-6xl font-black text-center'>
                    We Build
                    <br />
                    <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps
                </div>
                <p className='text-[#627382] text-center w-[80%]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='my-8 flex justify-center items-center  gap-8 flex-col md:flex-row '>
                    <a href='https://play.google.com/' target='_blank' className='btn btn-outline  font-bold p-6 text-lg'>
                        <img className='h-7   ' src={playStore} alt="" /> Google Play
                    </a>
                    <a href='https://www.apple.com/app-store/' target='_blank' className='btn btn-outline font-bold p-6 text-lg'>
                        <img className='h-7  ' src={appStore} alt="" />  App Store
                    </a>
                    
                </div>
            </div>

            {/* hero img section  */}
            <div className='flex flex-col justify-center items-center w-full'>
                <img className='w-2xl' src={heroImage} alt="hero img" />

                <div className='p-16 bg-linear-to-r from-[#632EE3] to-[#9F62F2]  flex flex-col justify-center items-center gap-8 w-full '>
                    <h1 className='text-4xl text-white font-bold text-center'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-center items-center flex-wrap gap-20 w-[80%] '>

                        {/* box  */}
                        
                        <div className='text-center'>
                            <p className='text-gray-300 text-sm'>Total Downloads</p>
                            <h1 className='text-6xl font-bold text-white'>29.6M</h1>
                            <p className='text-gray-300 text-sm'>21% more than last month</p>
                            
                        </div>
                        <div className='text-center'>
                            <p className='text-gray-300 text-sm'>Total Reviews</p>
                            <h1 className='text-6xl font-bold text-white'>906K</h1>
                            <p className='text-gray-300 text-sm'>46% more than last month</p>
                            
                        </div>
                        <div className='text-center'>
                            <p className='text-gray-300 text-sm'>Active Apps</p>
                            <h1 className='text-6xl font-bold text-white'>132+</h1>
                            <p className='text-gray-300 text-sm'>31 more will Launch</p>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
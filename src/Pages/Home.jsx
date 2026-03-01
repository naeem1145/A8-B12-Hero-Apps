import React from 'react';
import HeroSection from '../components/HeroSection';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import { LuTrendingUp } from 'react-icons/lu';
import { Link } from 'react-router';
import Loading from '../components/Loading';


const Home = () => {

    const { apps, loading } = useApps();
    // console.log(apps)
    const featuredApps = apps.slice(0, 8)

    // loading spinner 
    if (loading) return <Loading />

    return (
        <div>

            {/* hero section  */}
            <HeroSection />

            <div className='text-center py-9'>
                <h1 className='text-4xl font-bold flex gap-3 items-center justify-center '>Trending Apps <span className='text-green-500'><LuTrendingUp /></span> </h1>
                <p className='text-gray-500 mt-3 '>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center '>

                {

                    // loading spinner 
                    loading
                        ?
                        <Loading />
                        :
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ' >

                            {/* card */}

                            {
                                featuredApps.map((app, i) => <AppCard key={i} app={app} />)
                            }

                        </div>

                }

                <Link to='/allApplication' className='btn  mt-20 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5'>Show All</Link>

            </div>
        </div>
    );
};

export default Home;
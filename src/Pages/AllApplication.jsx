import React, { useState } from 'react';
import { DiVisualstudio } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import AppNotFound from '../components/AppNotFound';
import Loading from '../components/Loading';

const AllApplication = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();


    const searchedApps = term
        ? apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term)
        )
        : apps

    // loading spinner 
    if (loading) return <Loading />



    return (
        <div>
            <div className='text-center p-3  md:p-9 '>
                <h1 className='text-4xl font-bold flex gap-3 items-center justify-center '>Our All Applications <span className='text-green-500'><DiVisualstudio /></span> </h1>
                <p className='text-gray-500 mt-3 '>Explore All Apps on the Market developed by us. We code for Millions.</p>
            </div>


            {/* search section  */}
            <div className='flex justify-between items-center py-6 px-4 md:px-8 lg:px-12'>
                <h1 className='text-3xl font-semibold'>All Apps <span className='text-sm text-gray-500'>({searchedApps.length}) Products found.</span></h1>

                <label className="input">
                    <FiSearch />
                    {/* controlled input field */}
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search Your Products" />
                </label>

            </div>

            <div className='py-6 px-4 md:px-8 lg:px-12'>

                {
                    loading ? (
                        <Loading />
                    ) : (
                        searchedApps.length === 0 ? (
                            <AppNotFound />
                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                {searchedApps.map((app, i) => (
                                    <AppCard key={i} app={app} />
                                ))}
                            </div>
                        )
                    )
                }




            </div>



        </div>
    );
};

export default AllApplication;
import React, { useState } from 'react';
import { loadInstalList, removeFromInstalList } from '../utils/localStorage';
import { CiSaveDown2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { GrInstall } from 'react-icons/gr';
import { toast } from 'react-toastify';
import AppNotFound from '../components/AppNotFound';
import useApps from '../hooks/useApps';
import Loading from '../components/Loading';

const Installation = () => {

    const [installList, setInstallList] = useState(() => loadInstalList())
    const [sortOrder, setSortOrder] = useState('none')
    const { loading } = useApps()

    // loading spinner 
    if (loading) return <Loading />

    // if (!installList.length) return <AppNotFound />

    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...installList].sort((a, b) => a.size - b.size)
        } else if (sortOrder === 'size-desc') {
            return [...installList].sort((a, b) => b.size - a.size)
        } else {
            return installList
        }
    })()

    const handleRemove = id => {
        // remove from localstorage
        removeFromInstalList(id)
        // for ui instant update
        setInstallList(prev => prev.filter(p => p.id !== id))
    }


    function toMillion(num) {
        return num / 1000000;
    }



    return (
        <div className=' py-6 px-4 md:px-8 lg:px-12'>

            <div className='text-center py-9'>
                <h1 className='text-4xl font-bold flex gap-3 items-center justify-center '>Your Installed Apps<span className='text-green-500'><GrInstall /></span> </h1>
                <p className='text-gray-500 mt-3 '>Explore All Trending Apps on the Market developed by us.</p>
            </div>


            <div className='space-y-6'>
                <div className='flex justify-between py-5 items-center'>
                    <h1 className='text-3xl font-semibold'>
                        InstallList{' '}
                        <span className='text-sm text-gray-500'>
                            ({sortedItem.length}) Apps Found.
                        </span>
                    </h1>

                    <label className='form-control w-full max-w-xs'>
                        <select
                            className='select select-bordered'
                            value={sortOrder}
                            onChange={e => setSortOrder(e.target.value)}
                        >
                            <option value='none'>Sort by Size</option>
                            <option value='size-asc'>Low-&gt;High</option>
                            <option value='size-desc'>High-&gt;Low</option>
                        </select>
                    </label>
                </div>
                <div className='space-y-3'>

                    {
                        !installList.length ? (
                            <AppNotFound />
                        ) : (
                            sortedItem.map(p => (
                                <div key={p.id} className='rounded-xl flex flex-col md:flex-row justify-between items-center bg-base-100 shadow-xl'>
                                    <div className='card card-side flex flex-col md:flex-row justify-between items-center'>
                                        <figure className='p-10 md:p-4 '>
                                            <img
                                                className='w-20 object-cover'
                                                src={p.image}
                                                alt={p.name}
                                            />
                                        </figure>
                                        <div className='card-body flex flex-col items-start'>
                                            <h3 className='card-title'>{p.title}</h3>
                                            <div className='flex gap-4'>
                                                <div className='font-bold flex gap-2 items-center rounded-lg text-green-500'>
                                                    <CiSaveDown2 />
                                                    {toMillion(p.downloads)}M
                                                </div>
                                                <div className='font-bold flex gap-2 items-center rounded-lg text-orange-500'>
                                                    {p.ratingAvg}
                                                    <FaStar />
                                                </div>
                                                <div className='font-bold flex gap-2 items-center rounded-lg text-gray-500'>
                                                    {p.size}MB
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-5 flex items-center gap-3'>
                                        <button
                                            onClick={() => {
                                                toast.success(`${p.title} was removed!!`);
                                                handleRemove(p.id);
                                            }}
                                            className='btn btn-outline bg-[#00D390] text-white'
                                        >
                                            Uninstall
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }


                </div>
            </div>

            <div className='py-6 px-4 md:px-8 lg:px-12'>







            </div>



        </div>
    );
};

export default Installation;
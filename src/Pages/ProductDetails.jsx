import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import downloadImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';
import likeImg from '../assets/icon-review.png';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadInstalList, updateList } from '../utils/localStorage';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const ProductDetails = () => {

    const { id } = useParams()
    const { apps, loading } = useApps()

    const app = apps.find(a => a.id === Number(id))

    const [installedList, setInstalledList] = useState([])

    useEffect(() => {
        setInstalledList(loadInstalList())
    }, [])

    const handleInstall = (app) => {
        toast.success(`${app.title} installed!`)
        updateList(app)
        setInstalledList(loadInstalList())
    }

    // loading spinner 
    if (loading) return <Loading/>

    const { image, title,  description, size, reviews, ratingAvg, downloads, ratings } = app || {}

    function toMillion(num) {
        return num / 1000000;
    }
    function toK(num) {
        return num / 1000;
    }

    const chartData = ratings.map(r => ({
        rating: r.name,
        total: r.count
    }))

    const isInstalled = installedList.some(item => item.id === app.id)

    return (
        <div className='flex justify-between items-center py-6 px-4 md:px-8 lg:px-12'>
            <div className='w-full'>

                <div className='flex  flex-col lg:flex-row gap-10 my-5'>
                    <img className='w-62.5 h-62.5 rounded-2xl shadow-2xl' src={image} alt='Shoes' />

                    <div className='w-full'>
                        <div className='flex flex-col items-start justify-center py-2'>
                            <h1 className='text-4xl font-bold flex gap-3 items-center justify-center'>{title}</h1>
                            <p className='text-gray-500 mt-3 font-semibold'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>productive.io</span></p>
                        </div>

                        <hr className='text-[#6b778d]' />

                        <div className='my-4 flex gap-8 justify-between items-center w-[60%]'>
                            <div className='flex gap-2 flex-col justify-center items-start'>
                                <img className='h-8' src={downloadImg} alt="" />
                                <p className='text-gray-500 text-sm'>Downloads</p>
                                <h1 className='text-3xl font-bold'>{toMillion(downloads)}M</h1>
                            </div>

                            <div className='flex gap-2 flex-col justify-center items-start'>
                                <img className='h-8' src={ratingImg} alt="" />
                                <p className='text-gray-500 text-sm'>Average Ratings</p>
                                <h1 className='text-3xl font-bold'>{ratingAvg}</h1>
                            </div>

                            <div className='flex gap-2 flex-col justify-center items-start'>
                                <img className='h-8' src={likeImg} alt="" />
                                <p className='text-gray-500 text-sm'>Total Reviews</p>
                                <h1 className='text-3xl font-bold'>{toK(reviews)}K</h1>
                            </div>
                        </div>

                        <button
                            onClick={() => handleInstall(app)}
                            className={`btn text-white shadow-xl ${isInstalled ? 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-not-allowed' : 'bg-linear-to-r from-[#632EE3] to-[#9F62F2]'}`}
                            disabled={isInstalled}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>

                <hr className='text-[#6b778d] mt-10' />

                <div className='space-y-3 flex flex-col justify-center items-start my-6'>
                    <h2 className='font-bold text-2xl'>Ratings</h2>
                    <div className='rounded-xl p-4 h-80 w-full'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" dataKey="total" />
                                <YAxis type="category" dataKey="rating" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="total" fill="#FF8811" activeBar={<Rectangle stroke="purple" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <hr className='text-[#6b778d] mt-10' />
                <div className='flex flex-col justify-center items-start gap-5 my-8'>
                    <h2 className='font-bold text-2xl'>Description</h2>
                    <div className='text-gray-500'>{description}</div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails   
import React from 'react';
import { CiSaveDown2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    function toMillion(num) {
        return num / 1000000;
    }


    return (

        <Link to={`/allApplication/${app.id}`} >
            <div className="card flex flex-col justify-between bg-base-100 w-full h-full  hover:scale-105 transition ease-in-out cursor-pointer shadow-xl">
                <figure className='h-48 p-8 mt-4 overflow-hidden'>
                    <img className='w-full object-contain rounded-2xl' src={app.image} alt='Shoes' />
                </figure>
                <div className=" p-4 gap-7">
                    <h2 className="card-title mb-4">
                        {app.title}
                    </h2>

                    <div className="card-actions justify-between">
                        <div className='bg-green-100 flex gap-2 items-center p-2 rounded-lg text-green-500'>
                            <CiSaveDown2 />
                            {toMillion(app.downloads)}M
                        </div>
                        <div className='bg-orange-100 flex gap-2 items-center p-2 rounded-lg text-orange-500'>
                            {app.ratingAvg}
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
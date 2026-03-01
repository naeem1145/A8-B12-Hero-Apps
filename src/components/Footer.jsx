import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] '>
            <footer className='max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-12 '>
                <div className='flex justify-between '>
                    <div>
                        <Link to={'/'} className="text-xl flex gap-1 items-center justify-center ">
                            <img className='h-8' src={logo} alt="" />
                            <span className="font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                                HERO.IO
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center gap-5 text-white'>
                        <p>Social Links</p>
                        <ul className='flex items-center justify-center gap-2'>
                            <li><FaXTwitter /></li>
                            <li><FaLinkedin /></li>
                            <li><FaFacebook /></li>
                        </ul>
                    </div>
                </div>
                <hr className='text-[#36435d] ' />
                <div className='text-white '>
                    <p className='text-center text-[.8rem] pt-5'>Copyright © 2025 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
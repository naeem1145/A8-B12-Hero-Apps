import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { IoHomeOutline } from 'react-icons/io5';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto px-4 md:px-8 lg:px-12 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `font-medium btn btn-ghost ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/allApplication"
                                        className={({ isActive }) =>
                                            `font-medium btn btn-ghost ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                        }
                                    >
                                        Apps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/installation"
                                        className={({ isActive }) =>
                                            `font-medium btn btn-ghost ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                        }
                                    >
                                        Installation
                                    </NavLink>
                                </li>
                            </ul>
                        </ul>
                    </div>

                    <Link to='/' className="text-xl flex gap-1 items-center justify-center">
                        <img className='h-8' src={logo} alt="" />
                        <span className="font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                            HERO.IO
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium flex items-center gap-1 ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                }
                            >
                                <IoHomeOutline /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allApplication"
                                className={({ isActive }) =>
                                    `font-medium flex items-center gap-1 ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                }
                            >
                                <FaAppStore /> Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    `font-medium flex items-center gap-1 ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                                }
                            >
                                <MdInstallDesktop /> Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className='flex items-center gap-1 btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                        <FaGithub />
                        <a href="https://github.com/naeem1145" target='_blank' rel="noreferrer">Contribute</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Nav2.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Nav2 = () => {
    const navRef = useRef()
    const [user] = useAuthState(auth)

    // responsive nav 
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div className="menu-container  px-8 bg-slate-200  shadow-lg">

            {/* categories link */}
            <div className="categories font-semibold flex">
                <div className="antialiased">
                    <div className="">
                        <div className="group category-dropdown inline-block relative">
                            <button
                                className=" text-gray-700  font-semibold px-4 hover:bg-teal-400 hover:text-white inline-flex items-center"
                            >
                                <span className="mr-1 lg:text-base text-sm pt-3 pb-2">ALL CATEGORIES</span>
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </button>
                            <ul className=" absolute hidden text-gray-700 w-[191px] group-hover:block">
                                <li className="">
                                    <Link className="text-center bg-slate-200 transition-all duration-400 hover:text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#">Men</Link>
                                </li>
                                <li className="">
                                    <Link
                                        className="text-center bg-slate-200 transition-all duration-400 hover:text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                    >Women</Link>
                                </li>
                                <li className="">
                                    <Link
                                        className="text-center bg-slate-200 transition-all duration-400 hover:text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                    >Jacket</Link>
                                </li>
                                <li className="">
                                    <Link
                                        className=" text-center bg-slate-200 transition-all duration-400 hover:text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                    >Hoddie</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* navbar menu */}
            <div className='menus'>

                {/* responsive nav icon */}
                <div className='nav-icon ' onClick={showNavbar}>
                    <FontAwesomeIcon className='menu-icon' icon={faBars} />
                </div>
                <ul className='flex' ref={navRef}>
                    {/* responsive close nav icon */}
                    <div onClick={showNavbar} className="nav-icon nav-close"> <FontAwesomeIcon className='menu-icon-close' icon={faXmark} /></div>

                    <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink className='deal-text lg:text-base text-sm menu font-semibold px-4'>BEST DEALS </NavLink></li>
                    <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink to='/home' className='menu px-4 font-semibold'>HOME</NavLink></li>
                    <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink to='/shops' className='menu px-4 font-semibold'>SHOP</NavLink></li>

                    <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink className='menu px-4 font-semibold'>BLOG</NavLink></li>
                    <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink className='menu px-4 font-semibold'>CONTACT</NavLink></li>
                    {
                        user && <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink to='/dashboard' className='menu px-4 font-semibold'>DASHBOARD</NavLink></li>
                    }
                    {
                        user ?
                            <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink onClick={handleLogout} to='/login' className='menu px-4 pr-2 font-semibold'>LOGOUT</NavLink></li>

                            :
                            <li className='item pt-3 pb-2 hover:bg-teal-400 hover:text-white transition-all duration-300'><NavLink to='/login' className='menu px-4 pr-2 font-semibold'>LOGIN</NavLink></li>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Nav2;
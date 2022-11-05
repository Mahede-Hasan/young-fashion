import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Nav1.css';

const Nav1 = () => {
    return (
        <div>
            {/* nav-1 container  */}
            <div className="nav1-container flex justify-between items-start px-14 py-3">

                {/* website logo */}
                <div className="logo ">
                    <h1>YoungFashion</h1>
                </div>

                {/* search-input */}
                <div className="search-input ml-4">
                    <form>
                        <div class="flex">
                            <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>


                            <div class="relative w-full">
                                <input type="search" class="input-box block py-2 lg:pr-60 lg:pl-12 md:pr-44 w-full text-sm text-gray-900 bg-gray-200 focus:border-none border-none border  focus:outline-none" placeholder="Search your product" required="" />
                                <button type="submit" class="absolute top-0 right-0 py-2 px-4 text-sm font-medium text-gray rounded-none  focus:outline-none">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                   
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

                 {/* nav icon */}
            <div className='nav-icon-container flex'>
                <span className='pr-8 text-xl cursor-pointer text-gray-600'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                <span className='pr-8 text-xl cursor-pointer text-gray-600'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></span>
                <span className='pr-8 text-xl cursor-pointer text-gray-600'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
            </div>
            </div>
        </div>
    );
};

export default Nav1;
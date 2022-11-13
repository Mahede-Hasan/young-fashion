import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Nav1.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductDetailContext } from '../../Shared/Context';

const Nav1 = ({setSearch}) => {
    const [cartProduct,] = useContext(ProductDetailContext)
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()
    
    const handleSearch = e => {
        e.preventDefault()
        fetch(`http://localhost:5000/products?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                if(data){
                    navigate('/search')
                    setSearch(data)
                }
                
            })
    }
    return (
        <div className='bg-white'>
            {/* nav-1 container  */}
            <div className="nav1-container flex justify-between items-start px-14 py-3">

                {/* website logo */}
                <div className="logo ">
                    <h1>YoungFashion</h1>
                </div>

                {/* search-input */}
                <div className="search-input ml-4">
                    <form onSubmit={handleSearch}>
                        <div class="flex">
                            <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>


                            <div class="relative w-full">
                                <input
                                    onChange={e => setSearchText(e.target.value)}
                                    type="search" class="input-box block py-2 lg:pr-60 lg:pl-12 md:pr-44 w-full text-sm text-gray-900 bg-gray-200 focus:ring-0 focus:border-none border-none border  focus:outline-none" placeholder="Search your product" required="" />
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
                    <Link to='/cart' className='pr-8 text-xl cursor-pointer text-gray-600'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon><span className='text-sm absolute top-2 bg-teal-400 rounded-[50%] px-1.5 text-white font-semibold'>{cartProduct.length} </span></Link>
                    <span className='pr-8 text-xl cursor-pointer text-gray-600'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                </div>
            </div>
        </div>
    );
};

export default Nav1;
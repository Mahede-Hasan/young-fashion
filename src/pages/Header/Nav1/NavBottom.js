import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ProductDetailContext } from '../../Shared/Context';
import './NavBottom.css'

const NavBottom = () => {
    const { cartProduct, loveCart } = useContext(ProductDetailContext)
    return (
        <div>
            {/* when mobile device then show this nav icon bottom */}
            <div className='nav-bottom-container hidden bg-white w-full '>
                <div className='shopping-icon mb-6 mt-1'> <Link to='/cart' className='text-xl cursor-pointer text-gray-600 flex justify-center pt-2'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon><span className='text-sm absolute top-2 ml-5  bg-teal-400 rounded-[50%] h-4 w-4 pl-1 text-white font-semibold'>{cartProduct.length} </span></Link></div>

                <div className='absolute bottom-9 home-icon'><Link to='/home' className=' text-2xl cursor-pointer text-gray-600 flex justify-center pt-3'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link></div>

                <div className='heart-icon mb-6 mt-1'> <Link to='/lovecart' className=' text-xl cursor-pointer text-gray-600 flex justify-center pt-2'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon><span className='text-sm absolute top-2  ml-5  bg-teal-400 rounded-[50%] h-4 w-4 pl-1 text-white font-semibold'>{loveCart.length} </span></Link></div>
            </div>
        </div>
    );
};

export default NavBottom;
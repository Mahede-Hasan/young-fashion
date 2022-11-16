import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './HomeProductDisplay.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductDetailContext } from '../../Shared/Context';

const HomeProductDisplay = ({ product }) => {
    const {handleAddToCart,handleAddToLove} = useContext(ProductDetailContext)
    const { name, price, prePrice, img, _id } = product;
    
    return (
        <div className='product-home-container mx-auto my-8'>
            {/* card image */}
            <div className="cart-img-container">
                <img className='cart-img' src={img} alt="" />
                <div className="cart-icon-container">
                    <button onClick={()=>handleAddToCart(_id)} title='Add to Cart' className='cart-icon'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                    <button onClick={()=>handleAddToLove(_id)} className='cart-icon' ><FontAwesomeIcon  icon={faHeart}></FontAwesomeIcon></button>
                    <Link className='cart-icon mt-8 text-[16px] text-white' ><FontAwesomeIcon  icon={faSearch}></FontAwesomeIcon></Link>
                </div>
            </div>

            {/* card content */}
            <h3 className='text-md pt-1 px-2' > {name}</h3>

            <h4 className='py-1 px-2'>Reviews : <span className='text-[11px] text-orange-300'>
                {/* review icon from fontawesome */}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span></h4>
            <div className='card-content px-2 flex font-semibold text-sm'>
                <p className='line-through pr-3 text-gray-400'>${prePrice}</p>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default HomeProductDisplay;
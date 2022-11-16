import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';

const Shop = ({ product }) => {
    const { name, price, prePrice, img, _id } = product;
    const { handleAddToCart, handleAddToLove,products,setCartDetail } = useContext(ProductDetailContext)
    const navigate = useNavigate()

    const handleDetailCart = id => {
        const remain = products.find(product => product._id === id)
        setCartDetail(remain)
        navigate('/cartDetail')
    }


    return (
        <div className='product-home-container mx-auto my-8'>
            {/* card image */}
            <div className="cart-img-container">
                <img className='cart-img' src={img} alt="" />
                <div className="cart-icon-container">
                    <button onClick={() => handleAddToCart(_id)} title='Add to Cart' className='cart-icon'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                    <button onClick={() => handleAddToLove(_id)} className='cart-icon' ><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                    <button onClick={() => handleDetailCart(_id)} className='cart-icon mt-8 text-[16px] text-white'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </div>
            </div>

            {/* card content */}
            <h3 className='text-md pt-1' > {name}</h3>

            <h4 className='py-1'>Reviews : <span className='text-[11px] text-orange-300'>
                {/* review icon from fontawesome */}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span></h4>
            <div className='card-content flex font-semibold text-sm'>
                <p className='line-through pr-3 text-gray-400'>${prePrice}</p>
                <p>${price}</p>

            </div>
        </div>
    );
};

export default Shop;
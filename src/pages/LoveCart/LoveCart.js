import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';

const LoveCart = () => {
    const { loveCart, setLoveCart, handleAddToCart } = useContext(ProductDetailContext)

    // remove cart
    const handleLoveCartRemove = id => {
        const removeCart = loveCart.filter(cart => cart._id !== id)
        setLoveCart(removeCart)
    }
    return (
        <div className='px-10'>
            <h1 className='text-2xl pt-6 pb-12 font-semibold'>Product you want to love</h1>
            {
                loveCart.map(loveC => <div key={loveC._id}>
                    <div className='border border-teal-200 h-[100px] hover:border-gray-200 transition-all duration-300 px-4 mx-10 my-10 flex justify-between items-center hover:bg-gray-200'>

                        <img className='w-16 h-20 rounded-sm' src={loveC.img} alt="" />
                        <div className="name-price">
                            <h3>{loveC.name}</h3>
                            <h3>${loveC.price}</h3>
                        </div>
                        <h6>${loveC.price}</h6>
                        <button onClick={() => handleLoveCartRemove(loveC._id)}>
                            <FontAwesomeIcon className='text-red-500 hover:text-red-700' icon={faTrash}></FontAwesomeIcon>
                        </button>
                        <button className='bg-teal-400 px-4 py-1 text-white font-semibold hover:bg-teal-600' onClick={() => handleAddToCart(loveC._id)}>Add to Cart</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LoveCart;
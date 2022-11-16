import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';

const SelectedProduct = ({ singleCart }) => {
    const {cartProduct, setCartProduct} = useContext(ProductDetailContext)
    const { name, img, price, _id } = singleCart || {};
    const [count, setCount] = useState(1)

    // remove cart
    const handleCartRemove = id =>{
          const removeCart = cartProduct.filter(cart => cart._id !== id)
          setCartProduct(removeCart)
  }

  const handleIncrease=()=>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleDecrease=()=>{
    if(count > 1){
        const newCount = count - 1;
        setCount(newCount);
    }

  }

    return (
        <div className='border border-teal-200 h-[100px] hover:border-gray-200 transition-all duration-300 px-4 mx-10 my-10 flex justify-between items-center hover:bg-gray-200'>

            <img className='w-16 h-20 rounded-sm' src={img} alt="" />
            <div className="name-price">
                <h3>{name}</h3>
                <h3>${price}</h3>
            </div>
            <div className="quantity flex">
                <button onClick={handleDecrease} className='bg-gray-300 px-2 pb-1 text-xl font-bold rounded'>-</button>
                <p className='px-2'>{count}</p>
                <button onClick={handleIncrease} className='bg-gray-300 px-2 pb-1 text-xl font-bold rounded'>+</button>
            </div>
            <h6>${price}</h6>
            <button onClick={()=>handleCartRemove(_id)}>
                <FontAwesomeIcon className='text-red-500' icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SelectedProduct;
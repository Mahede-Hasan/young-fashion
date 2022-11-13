import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';

const CartTotal = () => {
    const [cartProduct] = useContext(ProductDetailContext)

    let total = 0;
    for(const cart of cartProduct){
        total = cart.price + total;
    }

    let shipping = Math.floor(total / 8);
    if(total > 130){
        shipping = 0;
    }

    const tax = parseInt(Math.floor(total/10).toFixed(2))
    const grandTotal = total + tax + shipping;
    return (
        <div className='sticky top-40 border-2 border-gray-200 my-10 h-[350px] px-5'>
            <h1 className=' text-xl font-semibold pt-6'>Cart Total</h1>
            <hr />
            <div className="cart-cal py-4">
                <p className='pb-4 font-semibold'>Item : {cartProduct.length}</p>
                <h2 className='pb-4 font-semibold'>Sub Total : ${total}</h2>
                <h3 className='pb-4 font-semibold'>Shipping : ${shipping}</h3>
                <h2 className='pb-4 font-semibold'>Tax : ${tax}</h2>
                <hr />
                <h1 className='pb-4 font-semibold text-2xl'>Total : ${grandTotal}</h1>
            </div>
            <button className='w-[80%] py-1 text-lg text-white font-semibold ml-8 hover:bg-teal-500 transition-all duration-300 bg-teal-400'>Check Proceed</button>
        </div>
    );
};

export default CartTotal;
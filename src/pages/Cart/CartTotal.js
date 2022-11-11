import React from 'react';

const CartTotal = () => {

 
    return (
        <div className='border-2 border-gray-200 my-10 h-[350px] px-5'>
                <h1 className=' text-xl font-semibold pt-6'>Cart Total</h1>
                <hr />
                <div className="cart-cal py-4">
                    <h2 className='pb-4 font-semibold'>Sub Total : </h2>
                    <h3 className='pb-4 font-semibold'>Shipping : </h3>
                    <h2 className='pb-4 font-semibold'>Tax :</h2>
                    <hr />
                    <h1 className='pb-4 font-semibold text-2xl'>Total :</h1>
                </div>
                <button className='w-[80%] py-1 text-lg text-white font-semibold ml-8 hover:bg-teal-500 transition-all duration-300 bg-teal-400'>Check Proceed</button>
            </div>
    );
};

export default CartTotal;
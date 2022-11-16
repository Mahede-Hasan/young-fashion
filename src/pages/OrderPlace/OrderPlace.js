import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';
import './OrderPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const OrderPlace = () => {
    const {cartProduct, email, name, userPhone,address} = useContext(ProductDetailContext)

    let total = 0;
    let id;
    for (const cart of cartProduct) {
        total = cart.price + total;

        // random id generate
        id = cart.sku + parseInt(Math.floor(Math.random() * 100000000)) + cart.price
    }

    let shipping = Math.floor(total / 8);
    if (total >= 130) {
        shipping = 0;
    }

    const tax = parseInt(Math.floor(total / 10).toFixed(2))
    const grandTotal = total + tax + shipping;
    return (
        <div className='mt-6 mb-12 px-10'>
            <h1 className='text-3xl font-semibold pb-6 pl-5'>Order place</h1>
            <div className="order-place-container grid lg:grid-cols-2 md:grid-cols-1">

                {/* order overview */}
                <div className="userOrderPlaceInfo ml-5 border-2 px-6 pt-4 pb-10 border-gray-200">
                    <h1 className='text-xl font-semibold pb-2'>Order ID: {id}</h1>
                    <hr />

                    {/* shipping information in order place page */}
                    <div className="flex items-center
                   pt-10">
                        <span><FontAwesomeIcon className='text-gray-500 text-2xl mr-2' icon={faTruckFast}></FontAwesomeIcon></span>
                        <h1 className=' font-bold uppercase text-teal-400'>Shipping Information</h1>
                    </div>
                    <hr className='w-full bg-gray-200 h-[2px] mt-3' />
                    <h2 className='text-md font-semibold pt-3'>Name : {name}</h2>
                    <h2 className='text-md font-semibold pt-3'>Email : {email}</h2>
                    <h2 className='text-md font-semibold pt-3'>Phone : {userPhone}</h2>
                    <h2 className='text-md font-semibold pt-3'>Address : {address}</h2>

                    <div className="product-overview-container pt-16">
                        <div className="flex items-center">
                            <span><FontAwesomeIcon className='text-gray-500 text-2xl mr-2' icon={faBagShopping}></FontAwesomeIcon></span>
                            <h1 className=' font-bold uppercase text-teal-400'>Product Detail</h1>
                        </div>
                        <hr className='w-full bg-gray-200 h-[2px] mt-3' />
                        {
                            cartProduct.map(cartP => <div className='flex justify-between items-center lg:text-base md:text-sm text-gray-500 border-1 border-gray-200 pt-2'>
                                <div className='flex items-center'>
                                    <img src={cartP.img} className='w-8' alt="" />
                                    <p className=' pl-8'>{cartP.name}</p>
                                </div>
                                <p>${cartP.price}</p>
                            </div>)
                        }
                    </div>
                </div>


                {/* payment calculation box */}
                <div className="userPayment mr-2 ">
                    <div className='sticky top-40 border-2 border-gray-200  px-5 pb-6 ml-5'>
                        <h1 className=' text-xl font-semibold pt-6 pb-2'>Make Payment</h1>
                        <hr />
                      
                        <div className="cart-cal py-4">
                            <p className='pb-4 font-semibold'>Item : <span className='float-right'>{cartProduct.length}</span></p>
                            <h2 className='pb-4 font-semibold'>Sub Total : <span className='float-right'>${total}</span></h2>
                            <h3 className='pb-4 font-semibold'>Shipping : <span className='float-right'>${shipping}</span></h3>
                            <h2 className='pb-4 font-semibold'>Tax : <span className='float-right'>${tax}</span></h2>
                            <hr />
                            <h1 className='pb-4 font-semibold text-2xl'>Total : <span className='float-right'>${grandTotal}</span></h1>
                        </div>
                        <button className='w-[80%] mx-auto block py-1 lg:text-lg md:text-md text-white font-semibold  hover:bg-teal-500 transition-all duration-300 bg-teal-400'>Pay With Card</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderPlace;
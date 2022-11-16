import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHeadset, faThumbsUp, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const CustomerService = () => {
    return (
        <div className=' lg:px-12 md:px-8 sm:px-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-20'>
            <div className="service-box hover:bg-teal-400 transition duration-500 hover:text-gray-200 flex items-center mx-auto border border-gray-200 px-3 py-4 my-3">
                <span><FontAwesomeIcon className='text-4xl pr-3 text-gray-300' icon={faTruckFast}></FontAwesomeIcon></span>
                <div className=''> 
                    <h2 className='text-xl font-semibold'>Free Shipping</h2>
                    <h6 className='text-sm text-gray-600'>Free Shipping for orders over</h6>
                    <p className='text-sm text-gray-600 font-semibold'>$130</p>
                </div>
            </div>
            
            <div className="service-box hover:bg-teal-400 transition duration-500 hover:text-gray-200 flex items-center mx-auto border border-gray-200 px-3 py-4 my-3">
                <span><FontAwesomeIcon className='text-4xl pr-3 text-gray-300' icon={faThumbsUp}></FontAwesomeIcon></span>
                <div className=''> 
                    <h2 className='text-xl font-semibold'>Product Guarantee</h2>
                    <h6 className='text-sm text-gray-600'>Within 30 days for an <br /> exchange.</h6>
                </div>
            </div>
            
            <div className="service-box hover:bg-teal-400 transition duration-500 hover:text-gray-200 flex items-center mx-auto border border-gray-200 px-5 py-4 my-3">
                <span><FontAwesomeIcon className='text-4xl pr-3 text-gray-300' icon={faHeadset}></FontAwesomeIcon></span>
                <div className=''> 
                    <h2 className='text-xl font-semibold'>Online Support</h2>
                    <h6 className='text-sm text-gray-600'>24/7 support our team........</h6>
                </div>
            </div>
            
            <div className="service-box hover:bg-teal-400 transition duration-500 hover:text-gray-200 flex items-center mx-auto border border-gray-200 px-3 py-4 my-3">
                <span><FontAwesomeIcon className='text-4xl pr-3 text-gray-300' icon={faCreditCard}></FontAwesomeIcon></span>
                <div className=''> 
                    <h2 className='text-xl font-semibold'>Flexible Payment</h2>
                    <h6 className='text-sm text-gray-600'>Pay with Multiple Credit Cards</h6>
                </div>
            </div>
            
           
        </div>
    );
};

export default CustomerService;
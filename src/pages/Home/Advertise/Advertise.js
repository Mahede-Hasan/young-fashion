import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import advertise1 from '../../../images/advertise/adertise (1).jpg';
import advertise2 from '../../../images/advertise/adertise (2).jpg';
import advertise3 from '../../../images/advertise/adertise (3).jpg';
import './Advertise.css';

const Advertise = () => {
    return (
        <div className='advertise-container grid lg:grid-cols-2 sm:grid-cols-1 gap-x-4 px-4 my-12'>

            {/* first half image */}
            <div className='advertise-half mb-4 cursor-pointer relative'>
                <img className='advertise-img h-full w-full' src={advertise1} alt="" />
                <div className='absolute top-64 px-10 text-white'>
                    <h6 className='text-sm pb-2'>New Season</h6>
                    <h2 className='text-4xl font-semibold pb-4 uppercase'>Big patterns are back in fashion</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quia voluptates unde sed aut aliquam.</p>
                    <button className='advertise-button mt-8'>SHOP NOW <FontAwesomeIcon className='advertise-btn-icon pl-1' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
               
            </div>

            {/* second half two image */}
            <div className=' grid grid-cols-1'>
                <div className='advertise-half h-[405px] w-full relative cursor-pointer'>
                    <img className='advertise-img h-[405px] w-full sm:mb-4 lg:mb-2' src={advertise3} alt="" />
                    <div className="absolute top-20 px-12 text-white">
                        <h6 className="text-sm pb-2">
                            New Season
                        </h6>
                        <h2 className='text-3xl font-semibold pb-4'>The latest men trend in this season</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia quos consectetur repellendus sunt. Cumque?</p>
                        <button className='advertise-button mt-8'>SHOP NOW <FontAwesomeIcon className='advertise-btn-icon pl-1' icon={faArrowRight}></FontAwesomeIcon></button>
                    </div>
                </div>

                <div className='advertise-half h-[388px] cursor-pointer relative'>
                    <img className='advertise-img h-[388px] w-full' src={advertise2} alt="" />
                    <div className=" px-12 absolute top-20 text-white">
                        <h6 className="text-sm pb-2">
                            New Season
                        </h6>
                        <h2 className='text-3xl font-semibold pb-4'>The latest men trend in this season</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia quos consectetur repellendus sunt. Cumque?</p>
                        <button className='advertise-button mt-8'>SHOP NOW <FontAwesomeIcon className='advertise-btn-icon pl-1' icon={faArrowRight}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;
import React from 'react';
import tshirt from '../../../images/categories/tshirt.jpg';
import jacket from '../../../images/categories/jacket.jpg';
import bags from '../../../images/categories/bag-3.jpg';
import belt from '../../../images/categories/pants.jpg';
import shoes from '../../../images/categories/shoes-2.jpg';
import outwear from '../../../images/categories/coats-2.jpg';
import './Categories.css'

const Categories = () => {
    return (
        // category container 
        <div className='mb-20 mx-auto lg:px-12 md:px-8 sm:px-2'>

            {/* category header  */}
            <h1 className='text-3xl uppercase font-semibold'>Best for your categories  <small className='text-sm text-gray-500'>23 categories belonging to a total of 34,592 products</small></h1>
            <div className="categories-container mx-auto mt-12 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 g-2">

                {/* category image box */}
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={tshirt} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>T-Shirt</h6>
                    </div>
                </div>
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={jacket} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>Jacket</h6>
                    </div>
                </div>
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={bags} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>Bags</h6>
                    </div>
                </div>
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={belt} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>Pants</h6>
                    </div>
                </div>
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={shoes} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>Shoes</h6>
                    </div>
                </div>
                <div className="relative single-container mb-4 cursor-pointer mx-auto">
                    <img className='' src={outwear} alt="" />
                    <div className="overlay-box">
                    <h6 className='absolute'>Outwear</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
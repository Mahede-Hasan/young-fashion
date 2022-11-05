import React, { useEffect, useState } from 'react';
import banner2 from '../../../images/banner/banner (2).jpg';
import banner3 from '../../../images/banner/banner (3).jpg';
import banner4 from '../../../images/banner/banner (4).jpg';
import './Banner.css'

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredImages = [
        banner2,
        banner3,
        banner4
    ]
    useEffect(() => {
        startSlider();
      }, []);
    
      const startSlider = () => {
        setInterval(() => {
          handleOnNextClick();
        }, 5000);
      };

    let count = 0;
    const handleOnNextClick = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentIndex(count);
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    };

    return (

        <div className="max-w-screen-xl m-auto">
            <div className="w-full slid-img relative select-none">
                <img className=' lg:h-[469px] md:h-[400px] sm:h-350px w-full' src={featuredImages[currentIndex]} alt="bannerImage" />

                <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                    <button onClick={handleOnPrevClick}></button>
                    <button onClick={handleOnNextClick}></button>
                </div>
                <div className='absolute w-full top-1/2 text-white pl-20 transform -translate-y-[90px]'>
                    <h1 className='text-4xl pb-4 font-semibold'>YOUNG FASHION 2023 COLLECTION</h1>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Fuga magni reprehenderit quod incidunt nemo amet sed quaerat enim doloribus? Quae.</p>
                    <div className="banner-btn-container pt-6">
                        <button className='text-gray-200 hover:text-gray-200 border-2 bg-teal-400 border-teal-400 hover:bg-transparent hover:border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium transition duration-500  text-md px-8 py-2.5 text-center mr-2 mb-2'>FIND OUT MORE</button>

                        <button className='text-gray-200 hover:text-gray-200 border-2 hover:border-teal-400 border-gray-200 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium transition duration-500  text-md px-8 py-2.5 text-center mr-2 mb-2'>SHOP THE SALE</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
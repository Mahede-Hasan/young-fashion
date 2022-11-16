import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../../Shared/Context';
import HomeProductDisplay from './HomeProductDisplay';

const HomeProduct = () => {
    const {products} = useContext(ProductDetailContext)

    return (
        <div className='home-product-container my-20 lg:px-12 md:px-4'>
            <h3 className='text-sm text-gray-400 text-center'>New Products</h3>
            <h1 className='text-3xl uppercase font-semibold text-center pb-5'>Shop the new <span>collection</span></h1>

            {/* dynamically data showing */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
                {
                    products.slice(7,12).map(product => <HomeProductDisplay
                        key={product._id}
                        product={product}
                    ></HomeProductDisplay>)
                }
            </div>

        </div>
    );
};

export default HomeProduct;
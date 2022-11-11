import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import HomeProductDisplay from './HomeProductDisplay';

const HomeProduct = () => {
    // fetch with useQuery
    const { data: homeProduct, isLoading, error } = useQuery('productsHome', () => fetch('products.json').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='home-product-container my-20 lg:px-12 md:px-4'>
            <h3 className='text-sm text-gray-400 text-center'>New Products</h3>
            <h1 className='text-3xl uppercase font-semibold text-center pb-5'>Shop the new <span>collection</span></h1>

            {/* dynamically data showing */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
                {
                    homeProduct.slice(20,25).map(product => <HomeProductDisplay
                        key={product.sku}
                        product={product}
                    ></HomeProductDisplay>)
                }
            </div>

        </div>
    );
};

export default HomeProduct;
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Shop from './Shop';

const Shops = () => {
    const { data: products, isLoading, error } = useQuery('products', () => fetch('products.json').then(res => res.json()))

    if (isLoading){
        return <Loading></Loading>
    }

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='home-product-container my-10 lg:px-12 md:px-4'>

            {/* dynamically data showing */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
                {
                    products.map(product => <Shop
                        key={product.sku}
                        product={product}
                    ></Shop>)
                }
            </div>

        </div>
    );
};

export default Shops;
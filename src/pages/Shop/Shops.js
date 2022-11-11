import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductFilter from './ProductFilter';
import Shop from './Shop';
import './Shops.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useProducts from '../../hooks/useProducts';
import shopBanner from '../../images/banner/shop-banner.jpg'

const Shops = ({setCartDetail}) => {
    const [products, setProducts, loading, pageCount, page, setPage, setSize] = useProducts()

    return (
        <div className='home-product-container my-10 lg:px-10 md:px-4'>

            {/* shop and filter  */}
            <div className="shop-products-main-container">

                {/* filter  */}
                <ProductFilter></ProductFilter>

                {/* products container */}
                <div>
                    <img className='shop-banner px-4' src={shopBanner} alt="" />
                    {loading && <Loading />}
                    <div className="shop-products-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                        {
                            products.map(product => <Shop
                                key={product._id}
                                product={product}
                                setCartDetail={setCartDetail}
                            ></Shop>)
                        }

                    </div>

                    {/* pagination */}
                    <div className='pagination mx-auto'>
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                key={number + 1}
                                onClick={() => setPage(number)}
                                className={`${page === number ? 'selected' : ''} cursor-pointer lg:mr-5 md:mr-3 sm:mr-1 bg-teal-400 px-2 text-white`}>{number + 1}</button>)
                        }
                        <select className='pagination-option border-2 border-teal-400 focus:ring-0 ' onChange={e => setSize(e.target.value)}>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                        </select>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Shops;
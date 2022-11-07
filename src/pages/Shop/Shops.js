import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductFilter from './ProductFilter';
import Shop from './Shop';
import './Shops.css';
import shopBanner from '../../images/banner/shop-banner.jpg'

const Shops = () => {
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(12)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[size, page])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(result => {
                const count = result.length;
                const pages = Math.ceil(count / size);
                setPageCount(pages)
            })
    }, [])

    return (
        <div className='home-product-container my-10 lg:px-10 md:px-4'>

            {/* shop and filter  */}
            <div className="shop-products-main-container">

                {/* filter  */}
                <ProductFilter></ProductFilter>

                {/* products container */}
                <div>
                    <img className='shop-banner px-4' src={shopBanner} alt="" />
                    <div className="shop-products-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                        {
                            products.map(product => <Shop
                                key={product.sku}
                                product={product}
                            ></Shop>)
                        }
                    </div>

                        {/* pagination */}
                    <div className='pagination mx-auto'>
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                onClick={() => setPage(number)}
                                className={`${page === number ? 'selected' : ''} cursor-pointer lg:mr-5 md:mr-3 sm:mr-1 bg-teal-400 px-2 text-white`}>{number + 1}</button>)
                        }
                        <select className='pagination-option border-2 border-teal-400 focus:ring-0 ' onChange={e => setSize(e.target.value)}>
                            <option value="12" selected>12</option>
                            <option value="16">16</option>
                        </select>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Shops;
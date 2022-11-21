import React from 'react';
import { useEffect } from 'react';

import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';
import './Cart.css'
import CartTotal from './CartTotal';
import SelectedProduct from './SelectedProduct';

const Cart = () => {
    const {cartProduct,setCartProduct} = useContext(ProductDetailContext)
    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/carts',{
    //         method: 'POST',
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(cartProduct)
    //     })
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setCartProduct(data)
    //     })
    // },[cartProduct,setCartProduct])
    return (
        <section className='cart-container px-12 pt-6 py-10'>
            <div>
                {
                    cartProduct.map(singleCart => <SelectedProduct
                        singleCart={singleCart}
                    ></SelectedProduct>)
                }
            </div>
            <div>
                <CartTotal cartProduct={cartProduct}></CartTotal>
            </div>
        </section>
    );
};

export default Cart;
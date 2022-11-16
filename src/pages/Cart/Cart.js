import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../Shared/Context';
import './Cart.css'
import CartTotal from './CartTotal';
import SelectedProduct from './SelectedProduct';

const Cart = () => {
    const {cartProduct} = useContext(ProductDetailContext)
  
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
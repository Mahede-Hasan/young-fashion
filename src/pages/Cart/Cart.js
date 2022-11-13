import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { ProductDetailContext } from '../Shared/Context';
import './Cart.css'
import CartTotal from './CartTotal';
import SelectedProduct from './SelectedProduct';

const Cart = () => {
    const {cartId} = useParams()
    const [cartProduct, setCartProduct] = useContext(ProductDetailContext)
    const [products, setProducts] = useProducts([])

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
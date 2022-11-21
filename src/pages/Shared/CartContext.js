import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { ProductDetailContext } from './Context';

export const CartOperationContext = createContext()
const CartContext = ({ children }) => {
    const { cartProduct } = useContext(ProductDetailContext)
    const [updateTotal, setUpdateTotal] = useState()

    let total = 0;
    let quantity = 0;
    for (const cart of cartProduct) {
        quantity = quantity + cart.quantity;
        total = cart?.price + total * cart.quantity;
    }

    let shipping = Math.floor(total / 8);
    if (total >= 130) {
        shipping = 0;
    }

    const tax = parseInt(Math.floor(total / 10).toFixed(2))
    const grandTotal = total + tax + shipping;



    return (
        <CartOperationContext.Provider value={{ total, shipping, tax, grandTotal, updateTotal, setUpdateTotal, quantity }}>
            {children}
        </CartOperationContext.Provider>
    );
};

export default CartContext;
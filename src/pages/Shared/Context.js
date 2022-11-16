import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductDetailContext = createContext('')
const Context = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([])
    const [loveCart, setLoveCart] = useState([])
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [name, setName] = useState('')
    const [products, setProducts] = useState([])
    const [cartDetail, setCartDetail] = useState([])


    const handleAddToCart = id => {
        const rest = products.find(product => product._id === id)
        setCartProduct([...cartProduct, rest])
    }

    const handleAddToLove = id => {
        const loveProduct = products.find(pd => pd._id === id)
        setLoveCart([...loveCart, loveProduct])
    }


    return (
        <ProductDetailContext.Provider value={{ cartProduct, setCartProduct, address, setAddress, email, setEmail, userPhone, setUserPhone, name, setName, loveCart, setLoveCart, products, setProducts, handleAddToCart, handleAddToLove, cartDetail, setCartDetail }}>
            <div>
                {children}
            </div>
        </ProductDetailContext.Provider>
    );
};

export default Context;
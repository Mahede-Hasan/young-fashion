import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

export const ProductDetailContext = createContext('')
const Context = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([])
    const [products, setProducts] = useState([])
    const [loveCart, setLoveCart] = useState([])
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [name, setName] = useState('')
    const [cartDetail, setCartDetail] = useState([])
    const [search, setSearch] = useState([])

    // const addToProduct = (selectedProduct) => {
    //     let newCart = [];
    //     const exists = cart.find(product => product._id === selectedProduct._id);
    //     if (!exists) {
    //         selectedProduct.quantity = 1;
    //         newCart = [...cart, selectedProduct];
    //     }
    //     else {
    //         const rest = cart.filter(product => product._id !== selectedProduct._id);
    //         exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, exists];
    //     }
    //     setCart(newCart);
    //     addToDb(selectedProduct._id)
    // }
    // add to cart product
    const handleAddToCart = id => {
        // let newCart = [];
        // const exists = products.find(product => product._id === cartProduct._id)
        // if(!exists){
        //     cartProduct.quantity = 1;
        //     newCart= [...cartProduct, exists]
        // }
        // else{
        //     const rest = products.filter(product => product._id !== cartProduct._id)
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }
        // setCartProduct(newCart)


        const rest = products.find(product => product._id === id)
        setCartProduct([...cartProduct, rest])
        toast('Add to Cart')
    }

    // add to love product
    const handleAddToLove = id => {
        const loveProduct = products.find(pd => pd._id === id)
        setLoveCart([...loveCart, loveProduct])
        toast('Add to favorite')
    }


    return (
        <ProductDetailContext.Provider value={{ cartProduct, setCartProduct, address, setAddress, email, setEmail, userPhone, setUserPhone, name, setName, loveCart, setLoveCart, products, setProducts, handleAddToCart, handleAddToLove, cartDetail, setCartDetail, search, setSearch }}>
            <div>
                {children}
            </div>
        </ProductDetailContext.Provider>
    );
};

export default Context;
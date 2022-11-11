import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const ProductDetailContext = createContext('')
const Context = ({children}) => {
    const [cartProduct, setCartProduct] = useState([])
    
    return (
        <ProductDetailContext.Provider value={[cartProduct, setCartProduct]}>
           <div>
            {children}
           </div>
        </ProductDetailContext.Provider>
    );
};

export default Context;
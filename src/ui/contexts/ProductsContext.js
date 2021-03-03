import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect( async () => {
        const response = await api.get(`/products`);
        const list = response.data;
        setProducts(list);
    }, []);

 return (
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider>
 )
}


export default ProductContextProvider;
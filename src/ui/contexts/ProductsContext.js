import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productsError, setProductsError] = useState(false);
    const [isProductsLoaded, setProductsLoaded] = useState(false);

    useEffect( async () => {
        try {
            const response = await api.get(`/products`);
            const list = response.data;
            setProducts(list);
            setProductsLoaded(true);
        } catch {
            setProductsLoaded(true);
            setProductsError(true);
        }
        
    }, []);

 return (
    <ProductsContext.Provider value={{products, productsError, isProductsLoaded}}>
        {children}
    </ProductsContext.Provider>
 )
}


export default ProductContextProvider;
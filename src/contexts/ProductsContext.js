import React, { createContext } from 'react';

const ProductsContext = createContext({
    products: [],
    setProducts: () => {}
});

export default ProductsContext;
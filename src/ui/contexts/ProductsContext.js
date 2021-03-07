import React, { createContext, useState, useEffect, useContext } from 'react';
import API from '../../services/products-service';

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(false);
  const [isProductsLoaded, setProductsLoaded] = useState(false);

  useEffect(async () => {
    try {
      const list = await API.getProducts();
      setProducts(list);
      setProductsLoaded(true);
    } catch {
      setProductsLoaded(true);
      setProductsError(true);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, productsError, isProductsLoaded }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

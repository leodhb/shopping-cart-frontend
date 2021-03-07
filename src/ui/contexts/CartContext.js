import React, { createContext, useState, useEffect, useContext } from 'react';
import { SessionContext } from './SessionContext';
import { ProductsContext } from './ProductsContext';
import API from '../../services/cart-service';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartLoaded, setCartLoaded] = useState(false);
  const [isCartEmpty, setCartEmpty] = useState(true);
  const [isChanging, setChanging] = useState(false);

  const { sessionId } = useContext(SessionContext);
  const { isProductsLoaded } = useContext(ProductsContext);

  /* get cart by id */
  useEffect(async () => {
    if (sessionId && isProductsLoaded) {
      const list = await API.getCart();
      setCart(list);
      setCartLoaded(true);
      if (list.items.length) setCartEmpty(false);
    }
  }, [sessionId, isProductsLoaded]);

  /* add product to cart */
  const addToCart = async (sku, amount) => {
    const list = await API.addToCart(sku, amount, sessionId);
    setCart(list);
    if (isCartEmpty) setCartEmpty(false);
  };

  /* update cart */
  const updateCart = async (sku, amount) => {
    setChanging(true);
    const list = await API.updateCart(sku, amount, sessionId);
    setCart(list);
    setChanging(false);
  };

  /* delete product from cart */
  const deleteFromCart = async (sku) => {
    const list = await API.deleteFromCart(sku, sessionId);
    setCart(list);
    if (list.items.length === 0) setCartEmpty(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartLoaded,
        isCartEmpty,
        setCart,
        setCartEmpty,
        addToCart,
        updateCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

import React, { useEffect, useState } from 'react';
import './App.css';
import Home from '../ui/pages/home';
import SessionContextProvider from '../ui/contexts/SessionContext';
import ProductContextProvider from '../ui/contexts/ProductsContext';
import CartContextProvider from '../ui/contexts/CartContext';

const App = () => {
  return (
    <SessionContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <Home />
        </CartContextProvider>
      </ProductContextProvider>
    </SessionContextProvider>
  );
};

export default App;

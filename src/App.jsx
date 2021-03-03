import React, { useEffect, useState } from 'react';
import './App.css';
import Home from  './pages/home';
import SessionContextProvider from './contexts/SessionContext';
import ProductContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

const App = () => {
  return (
    <SessionContextProvider>
      <ProductContextProvider>
          <CartContextProvider>
              <Home/>
        </CartContextProvider>
      </ProductContextProvider>
    </SessionContextProvider>
  );
}

export default App;

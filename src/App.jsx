import React, { useEffect, useState } from 'react';
import './App.css';
import Header    from './components/Header/Header';
import Products  from './components/Products/Products';
import CartItem  from './components/Cart/CartItem/CartItem';
import Preloader from './components/Shared/preloader';
import ErrorBox  from './components/Shared/errorScreen';

import {loadSessionId} from './helpers/localStorage';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart]               = useState([]);
  const [error, setError]             = useState(null);
  const [loaded, isLoaded]            = useState(false);
  const [sessionId, setSessionId]     = useState('teste de corno');


  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(
      (result) => {
        setProductList(result);
        isLoaded(true);
        setError(null);
        loadSessionId('@sallve-app/cartID').then((result) => setSessionId(result));
      },
      (error) => {
        isLoaded(true);
        setError(error.message);
      }
    )
  }, []);

  const addToCartHandler = (sku, amount) => {
      console.log('Adicionando ' + amount, sku + ' ao carrinho!');
      console.log(sessionId);
  }

  let productDivContent = null;

  if (error) {
    productDivContent =  <ErrorBox error={error} ></ErrorBox>;
  } else if (!loaded) {
    productDivContent =  <Preloader></Preloader>;
  } else {
    productDivContent =  <Products list={productList} clicked={addToCartHandler} />
  }

  return (
    <div className="App">
        <Header/>
        <div className="container mt-3">
        <div className="row sallve-MainPage">
          <div className="col-lg-7 sallve-productList">
            <div className="row">
                {productDivContent}
            </div>
          </div>
          <div className="col-lg-5 sallve-cartList">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                  <h3 className="mb-4 font-weight-bold">Sua sacola</h3>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
              </div>
            </div>
            
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;

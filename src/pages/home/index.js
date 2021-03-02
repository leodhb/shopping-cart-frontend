import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import ProductsContext from '../../contexts/ProductsContext';
import CartContext from '../../contexts/CartContext';
import Header from '../../components/Header';

import ProductList from '../../components/ProductList';
import Cart from '../../components/Cart';

import api from '../../services/api';

const Home = props => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const isSessionStarted = props.sessionId ? true : false;


  useEffect( async () => {
        const response = await api.get(`/products`);
        const list = response.data;
        setProducts(list);
        console.log('lista de produtos',list);
  }, []);

  useEffect( async () => {
    if(isSessionStarted) {
        const response = await api.get(`/cart/${props.sessionId}`);
        const list = response.data;
        setCart(list);
        console.log('carrinho',list);
    }
  }, [isSessionStarted]);


  return (
      <ProductsContext.Provider value={{products: products}} >
          <CartContext.Provider value={{cart: cart}}>
              <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <ProductList></ProductList>
                        </div>
                        <div className="col-lg-6">
                            <Cart></Cart>
                        </div>
                    </div>
                </div>
          </CartContext.Provider>
      </ProductsContext.Provider>
  );
}

export default Home;
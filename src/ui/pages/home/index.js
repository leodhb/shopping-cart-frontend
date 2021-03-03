import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import Header      from '../../components/Header';
import ProductList from '../../components/ProductList';
import Cart        from '../../components/Cart';

import {CartContext} from '../../contexts/CartContext';

const Home = () => {
  const {cart, isCartLoaded} = useContext(CartContext);
  const [cartDiv, setCartDiv]  = useState();


  useEffect(() => {
      if(isCartLoaded) {
          if(cart.totalCartValue === 0) {
              setCartDiv(<h1>Carrinho zerado brou</h1>)
          } else {
              setCartDiv(<Cart></Cart>)
          }
      }
  }, [cart, isCartLoaded]);

  return (
            <>
              <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-4">
                            <ProductList></ProductList>
                        </div>
                        <div className="col-lg-6">
                            {cartDiv}
                        </div>
                    </div>
                </div>
            </>
           
  );
}

export default Home;
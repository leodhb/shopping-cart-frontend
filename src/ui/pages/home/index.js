import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import Header      from '../../components/Header';
import ProductList from '../../components/ProductList';
import Cart        from '../../components/Cart';

const Home = () => {

  return (
            <>
              <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-4">
                            <ProductList></ProductList>
                        </div>
                        <div className="col-lg-6">
                            <Cart></Cart>
                        </div>
                    </div>
                </div>
            </>
           
  );
}

export default Home;
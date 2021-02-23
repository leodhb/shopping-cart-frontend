import React, { useEffect, useState } from 'react';
import './App.css';
import Header   from './components/Header/Header';
import Products from './components/Products/Products';
import CartItem from './components/Cart/CartItem/CartItem';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart]               = useState([]);
  const [error, setError]             = useState(null);
  const [loaded, isLoaded]            = useState(false);



  useEffect(() => {
    fetch("https://sallve-d7cfc-default-rtdb.firebaseio.com/products.json")
    .then(res => res.json())
    .then(
      (result) => {
        setProductList(result.products);
        isLoaded(true);
      },
      (error) => {
        isLoaded(true);
        setError(error);
      }
    )
  }, []);


  const addToCartHandler = (sku, amount) => {
      console.log('Adicionando ' + amount, sku + ' ao carrinho!');
  }


  let productDivContent = null;

  if (error) {
    productDivContent =  <div>Erro</div>;
  } else if (!loaded) {
    productDivContent =  <div className="text-center mt-4 w-100"> <h1>Loading...</h1> </div>;
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

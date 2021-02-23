import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

const App = () => {
  const [productList, setProductList] = useState([
    {id: 1, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 2, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg" },
    {id: 3, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 4, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 5, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 6, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 7, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"},
    {id: 8, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg"}
  ]);


  return (
    <div className="App">
        <Header/>
        <div className="container mt-3">
        <div className="row sallve-MainPage">
          <div className="col-lg-6 sallve-productList">
            <div className="row">
              <Products list={productList}/>
            </div>
          </div>
          <div className="col-lg-6">

          </div>
        </div>
        </div>
    </div>
  );
}

export default App;

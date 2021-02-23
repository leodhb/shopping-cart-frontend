import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

const App = () => {
  const [productList, setProductList] = useState([
    {id: 1, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-001", inventory: 10, price: 12.00}]},
    {id: 2, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-002", inventory: 10, price: 12.00}]},
    {id: 3, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-003", inventory: 10, price: 12.00}]},
    {id: 4, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-004", inventory: 10, price: 12.00}]},
    {id: 5, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-005", inventory: 10, price: 12.00}]},
    {id: 6, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-006", inventory: 10, price: 12.00}]},
    {id: 7, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-007", inventory: 10, price: 12.00}]},
    {id: 8, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-008", inventory: 10, price: 12.00}]}
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

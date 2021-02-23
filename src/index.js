import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/global.css';
import './assets/css/fontfaces.css';

const arrayProd = {
    products: [
        {id: 1, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-001", inventory: 10, price: 12.00}]},
        {id: 2, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-002", inventory: 10, price: 12.00}]},
        {id: 3, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-003", inventory: 10, price: 12.00}]},
        {id: 4, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-004", inventory: 10, price: 12.00}]},
        {id: 5, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-005", inventory: 10, price: 12.00}]},
        {id: 6, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-006", inventory: 10, price: 12.00}]},
        {id: 7, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-007", inventory: 10, price: 12.00}]},
        {id: 8, name: "máscara antirressaca", image: "https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg", sku: [{sku: "SV-MSC-008", inventory: 10, price: 12.00}]}
      ]
}

console.log(JSON.stringify(arrayProd));

ReactDOM.render(<App />, document.getElementById('root'));
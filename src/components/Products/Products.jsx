import React from 'react';
import Product from './Product/Product';


const Products = props => props.list.map(product => {
        return (
            <Product key={product.id} price={product.sku[0].price.toFixed(2)} image={product.image}> {product.name} </Product>
        )
 });

 export default Products;
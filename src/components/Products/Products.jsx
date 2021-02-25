import React from 'react';
import Product from './Product/Product';


const Products = props => props.list.map(product => {
        return (
            <Product 
                click={() => props.clicked(product.sku[0].sku, 1)} 
                key={product._id} 
                price={product.sku[0].price.toFixed(2)} 
                image={product.image}> {product.name} </Product>
        )
 });

 export default Products;
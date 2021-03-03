import React, { useContext } from 'react';
import './styles.css';
import Product from '../Product';
import {ProductsContext} from '../../contexts/ProductsContext';

const ProductList = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className="row">
            {products.map(product => {
                return <Product key={product._id} sku={product.sku[0].id} name={product.name} image={product.image} price={product.sku[0].price.toFixed(2)} />
            })}
        </div>
    )
}

export default ProductList; 
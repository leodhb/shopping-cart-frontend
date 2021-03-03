import React, { useContext } from 'react';
import './styles.css';
import Product from '../Product';
import {ProductsContext} from '../../contexts/ProductsContext';
import ErrorScreen from '../../screens/ErrorScreen';
import PreloaderScreen from '../../screens/PreloaderScreen';

const ProductList = () => {
    const {products, productsError, isProductsLoaded} = useContext(ProductsContext);

    const productListLoaded = 
    (<div className="row">
        {(!productsError) ? products.map(product => {
            return <Product key={product._id} sku={product.sku[0].id} name={product.name} image={product.image} price={product.sku[0].price.toFixed(2)} />
        }) : <ErrorScreen/>}
    </div>)

    return (
        <>
           {isProductsLoaded ? productListLoaded : <PreloaderScreen/>}
        </>
    )
}

export default ProductList; 
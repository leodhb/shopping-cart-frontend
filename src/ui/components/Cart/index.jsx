import React, { useContext, useEffect } from 'react';
import './styles.css';
import CartItem from '../CartItem';
import { CartContext } from '../../contexts/CartContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import EmptyCartScreen from '../../screens/EmptyCartScreen';

const Cart = () => {
    const {cart, isCartLoaded, isCartEmpty} = useContext(CartContext);
    const {products} = useContext(ProductsContext);
    
    let myCart = '';

    if(isCartLoaded) {
        myCart = cart.items.map(item => {
            const product = products.find(product => {
                return product.sku.some(sku => {
                    return sku.id === item.SKU;
                })
            });
            return (<CartItem key={item.SKU} item={item} product={product}></CartItem>)
        });
    }

    const cartWithItems = (
        <div className="col-lg-8 col-md-12">
        <div className="cart-container">
                    <table className="items-table">
                    <tbody>
                        {myCart}
                    </tbody>
                    </table>
                    <footer>
                        <div className="total">
                                <span>Total: </span>
                                <strong>R$ {isCartLoaded ? cart.totalCartValue.toFixed(2) : '0.00'}</strong>
                        </div>
                    </footer>
                </div>
                </div>
    );

    const cartWithoutItems = <EmptyCartScreen/>;

    return (
        <div className="row justify-content-center">
            
                {isCartEmpty ? cartWithoutItems : cartWithItems}
            
        </div>
    )
}

export default Cart; 
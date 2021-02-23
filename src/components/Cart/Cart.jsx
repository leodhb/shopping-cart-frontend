import React from 'react';
import CartItem from './CartItem/CartItem';


const Cart = props => props.list.map(item => {
        return (
            <CartItem key={product.id} price={product.sku[0].price.toFixed(2)} image={product.image}> {product.name} </CartItem>
        )
 });

 export default Cart;
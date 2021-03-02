import React, { createContext } from 'react';

const CartContext = createContext({
    cart: []
});

export default CartContext;
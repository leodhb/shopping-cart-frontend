import React, { createContext, useState, useEffect, useContext } from 'react';
import {SessionContext} from './SessionContext';
import {ProductsContext} from './ProductsContext';

import api from '../../services/api';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [isCartLoaded, setCartLoaded] = useState(false);
    const [isCartEmpty, setCartEmpty] = useState(true);
    const [isChanging, setChanging]   = useState(false);

    const {sessionId} = useContext(SessionContext);

    useEffect( async () => {
        if(sessionId) {
            const response = await api.get(`/cart/${sessionId}`);
            const list = response.data;
            setCart(list);
            setCartLoaded(true);
            if(list.items.length) setCartEmpty(false);

            console.log('MEU CARRINHO: ',list);
        }
    }, [sessionId]);

    const addToCart = async (sku, amount) => {
        const response = await api.put(`/cart/${sessionId}`, { sku: sku, qty: amount });
        const list = response.data;
        setCart(list);
        if(isCartEmpty) setCartEmpty(false);

        console.log('MEU CARRINHO DEPOIS DE ADICIONAR PRODUTO: ',list);
    }

    const updateCart = async (sku, amount) => {
            setChanging(true);
            const response = await api.patch(`/cart/${sessionId}`, { sku: sku, qty: amount });
            const list = response.data;
            setCart(list);
            setChanging(false);
            console.log('MEU CARRINHO DEPOIS DE MODIFICAR PRODUTO: ',list);
    }

    const deleteFromCart = async (sku) => {
        const response = await api.delete(`/cart/${sessionId}/${sku}`);
        const list = response.data;
        setCart(list);
        if(list.items.length === 0) setCartEmpty(true);

        console.log('MEU CARRINHO DEPOIS DE DELETAR PRODUTO: ',list);
    }

 return (
        <CartContext.Provider value={{cart, isCartLoaded, isCartEmpty, setCart, addToCart, updateCart, deleteFromCart}}>
            {children}
        </CartContext.Provider>
 )
}

export default CartContextProvider;
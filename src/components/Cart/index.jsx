import React from 'react';
import './styles.css';

import CartItem from '../CartItem';

const Cart = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
            <div className="cart-container">
                <table className="items-table">
                <tbody>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                </tbody>
                </table>

                <footer>
                <div className="total">
                        <span>Total: </span>
                        <strong>R$ 79.90</strong>
                </div>
                </footer>
            </div>
                            
            </div>
        </div>
    )
}

export default Cart; 
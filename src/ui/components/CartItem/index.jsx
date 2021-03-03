import React, { useContext } from 'react';
import './styles.css';
import CloseIcon from '../../../assets/img/close_icon.png';
import {CartContext} from '../../contexts/CartContext';

const CartItem = props => {
    const {SKU, qty, totalItemValue} = props.item;
    const {name, image} = props.product;
    const {updateCart, deleteFromCart} = useContext(CartContext);
    
    return (
        <tr className="cart-item">
                <td className="cart-img-container">
                  <img className="mx-auto" src={image} />
                </td>
                <td>
                  <div className="cart-title-bar">
                        <h4>{name}</h4>
                        <img src={CloseIcon} onClick={() => deleteFromCart(SKU)} className="delete-product-btn" alt=""/>
                  </div>

                  <div className="cart-amount-bar">
                    <button onClick={() => updateCart(SKU, -1)} className="change-qty-btn mx-1" type="button">-</button>
                    <span className="qty-amount">{qty}</span>
                    <button onClick={() => updateCart(SKU, 1)} className="change-qty-btn mx-1" type="button">+
                    </button>

                    <h5 className="cart-item-price my-auto ml-4">R$ {totalItemValue}</h5>
                  </div>
                </td>
              </tr>
    )
}

export default CartItem; 
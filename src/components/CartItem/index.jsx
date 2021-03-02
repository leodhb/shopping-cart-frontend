import React from 'react';
import './styles.css';
import CloseIcon from '../../assets/img/close_icon.png';
const CartItem = () => {
    return (
        <tr className="cart-item">
                <td className="cart-img-container">
                  <img className="mx-auto" src="https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-kitsfevereiro-kit-antiacne-mini-hover_grande.jpg"/>
                </td>
                <td>
                  <div className="cart-title-bar">
                        <h4>Kit tudooo</h4>
                        <img src={CloseIcon} className="delete-product-btn" alt=""/>
                  </div>
                  
                  <div className="cart-amount-bar">
                    <button className="change-qty-btn mx-1" type="button">-</button>
                    <span className="qty-amount">1</span>
                    <button className="change-qty-btn mx-1" type="button">+
                    </button>

                    <h5 className="cart-item-price my-auto ml-4">R$ 79.90</h5>
                  </div>
                </td>
              </tr>
    )
}

export default CartItem; 
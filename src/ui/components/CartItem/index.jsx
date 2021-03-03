import React, { useContext } from 'react';
import './styles.css';
import CloseIcon from '../../../assets/img/close_icon.png';
import {CartContext} from '../../contexts/CartContext';

const CartItem = props => {
    const {SKU, qty, totalItemValue} = props.item;
    const {name, image} = props.product;
    const {updateCart, deleteFromCart, isChanging} = useContext(CartContext);

    const productInventory = props.product.sku.find(item => item.id === SKU).inventory;

    /* checa o estoque do Produto e atualiza o DOM antes de chamar a API, além de só chamar a API se ainda houver estoque */
    const amountHandler = ( number ) => {
      switch(number) {
        case 1:
          if((number + qty) <= productInventory){ props.item.qty++; return true; }
          break;
        case -1:
          if((number + qty) > 0) {props.item.qty --; return true}
          break;
      }
      return false;
    }

    return (
        <tr className="cart-item">
            <td className="cart-img-container">
                <img className="mx-auto" src={image} />
            </td>
            <td>
                <div className="cart-title-bar">
                        <h4>{name}</h4>
                        <img className="delete-product-btn" src={CloseIcon} onClick={() => deleteFromCart(SKU)} alt=""/>
                </div>

                <div className="cart-amount-bar">
                      <button onClick={() => {if(amountHandler(-1)) updateCart(SKU, -1)}} className="change-qty-btn mx-1" type="button">-</button>
                      <span className="qty-amount">{qty}</span>
                      <button onClick={() => {if(amountHandler(1)) updateCart(SKU, 1)}} className="change-qty-btn mx-1" type="button">+</button>
                    <h5 className="cart-item-price my-auto ml-4">R$ {totalItemValue}</h5>
                </div>
             </td>
          </tr>
    )
}

export default CartItem; 
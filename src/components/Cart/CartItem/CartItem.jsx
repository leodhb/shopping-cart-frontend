import React from 'react';
import './CartItem.css';
import CloseIcon from '../../../assets/img/close_icon.png';

const CartItem = (props) => {
    return (
    <div className="row sallve-cartItemRow">
        <div className="col-sm-4">
            <img className="sallve-cartProductImage" src="https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-mascara-antirressaca-6_grande.jpg" alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-8">
            <div className="row h-50">
                <div className="col-lg-12 my-auto px-0">
                    <h5 className="sallve-cartProductName">Produto teste</h5>
                </div>
            </div>
            <div className="row p-0 h-50">
                <div className="col-sm-7 p-0 my-auto sallve-ammountContainer">
                    <button className="sallve-ammountBtn">-</button>
                    <span   className="sallve-ammountText">3</span>
                    <button className="sallve-ammountBtn">+</button>
                </div>
                <div className="col-sm-5 p-0 my-auto">
                    <h5 className="sallve-cartPriceText my-auto">R$ 99.99</h5>
                </div>
                <img src={CloseIcon} className="sallve-cartRemoveItemBtn"/>
            </div>
        </div>
        
    </div>

    )
}

export default CartItem; 
import React, { useContext } from 'react';
import './styles.css';
import {CartContext} from '../../contexts/CartContext';

const Product = props => {
    const {addToCart} = useContext(CartContext);

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
            <div className="card product-card">
                <img src={props.image} className="card-img-top"  alt={props.name}></img>
                <div className="card-body px-0">
                    <h6>R$ {props.price} </h6>
                    <h5 className="product-title">{props.name}</h5>
                    <button onClick={() => addToCart(props.sku, 1)} className="comprar-btn">comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Product; 
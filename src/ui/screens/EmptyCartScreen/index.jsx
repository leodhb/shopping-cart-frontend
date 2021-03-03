import React from 'react';
import './styles.css';
import BagIcon from '../../../assets/img/bag_icon.png';

const EmptyCartScreen = () => {
    return (
        <div className="empty-cart-container">
            <img className="empty-cart-icon" src={BagIcon}/>
            <h4 className="text-secondary">Sua sacola está vazia :(</h4>
        </div>
    )
}

export default EmptyCartScreen; 
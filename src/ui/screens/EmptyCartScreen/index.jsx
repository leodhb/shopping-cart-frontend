import React from 'react';
import './styles.css';
import BagIcon from '../../../assets/img/bag_icon_v2.png';

const EmptyCartScreen = () => {
    return (
        <div className="empty-cart-container">
            <img className="empty-cart-icon" src={BagIcon}/>
            <h4 className="text-secondary">ops! sua sacola ainda está vazia.</h4>
            <h4 className="text-secondary">vem cá descobrir nossas fórmulas e escolher a sua!</h4>
        </div>
    )
}

export default EmptyCartScreen; 
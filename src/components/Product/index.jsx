import React from 'react';
import './styles.css';

const Product = () => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
            <div className="card product-card">
                <img src="https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-kitsfevereiro-kit-antiacne-mini-hover_grande.jpg" className="card-img-top"  alt="Foto de "></img>
                <div className="card-body px-0">
                    <h6>R$  79.90 </h6>
                    <h5 className="product-title">Kit massa</h5>
                    <button className="comprar-btn">comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Product; 
import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
   <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
        <div className="card sallve-ProductCard">
            <img src={props.image} className="card-img-top"  alt="Foto de "></img>
            <div className="card-body px-0">
                <h6>R$  {props.price} </h6>
                <h5 className="sallve-ProductTitle">{props.children}</h5>
                <button onClick={props.click} className="sallve-ComprarBtn">comprar</button>
            </div>
        </div>
    </div>
    )
}

export default Product; 
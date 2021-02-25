import React from 'react';
import ErrorIcon from '../../assets/img/error_icon.png';

const ErrorScreen = (props) =>  {
        return (
            <div className="col-lg-12 mt-4 m-auto text-center justify-content-center">
                <img className="img-fluid mt-4" width="150" src={ErrorIcon}></img>
                <h1>Oops... Tivemos um probleminha</h1>
                <p className="text-secondary">Descrição do erro: {props.error}</p>
            </div>
        )
 };

 export default ErrorScreen;
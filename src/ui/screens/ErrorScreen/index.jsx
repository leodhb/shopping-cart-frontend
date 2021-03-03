import React from 'react';
import './styles.css';
import ErrorIcon from '../../../assets/img/error_icon.png';

const ErrorScreen = () => {
  return (
    <div className="error-container">
      <img
        className="error-icon"
        src={ErrorIcon}
        alt="Houve um problema com a página"
      />
      <h4 className="text-secondary">
        ops! tivemos um probleminha para carregar esta página.{' '}
      </h4>
    </div>
  );
};

export default ErrorScreen;

import React from 'react';
import './styles.css';
import logo from '../../../assets/img/logo-sallve.png';

const Header = () => {
    return (
        <header className="row sallve-header mb-4">
                <img src={logo} className="sallve-brand" alt="Logomarca da Sallve"/>
        </header>
    )
}

export default Header; 
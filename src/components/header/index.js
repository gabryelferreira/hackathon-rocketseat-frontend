import React from 'react';
import Logo from '../../assets/imgs/logo2.svg';
import './index.css';

const Header = () => {

    return (
        <header>
            <img src={Logo} alt="Logo" id="logo" />
        </header>
    );

}

export default Header;
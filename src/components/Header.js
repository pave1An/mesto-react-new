import React from 'react';
import logo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="логотип Место"/>
        <span className="header__user-email">email@email.com</span>
        <Link className="header__link" to="#">Войти</Link>
    </header>
  );
}

export default Header;
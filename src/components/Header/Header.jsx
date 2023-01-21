import React from 'react';
import './header.css'
import logo from '../../assets/img/header/logo.svg'
import chevron from '../../assets/img/header/chevron-down.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo"/>
          <p className="header__logo_text">antools.</p>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <a href="#" className="header__link">Home</a>
            </li>
            <li>
              <a href="#" className="header__link"
              >Categories
                <img
                  src={chevron}
                  alt="chevron-down"
                  className="header__down"
                /></a>
            </li>
            <li>
              <a href="#" className="header__link"
              >My Collections</a
              >
            </li>
            <li>
              <a href="#" className="header__link">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="header__right">
          <a href="#" className="header__link_login">Login</a>
          <button className="header__button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header




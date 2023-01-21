import React from 'react';
import './footer.css'
import logo from '../../assets/img/header/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__hat">
              <img src={logo} alt="logo"/>
                <div className="footer__title">antools.</div>
            </div>
            <h3 className="footer__main">
              Copyright 2021. Antools
            </h3>
            <p className="footer__foot">Antool is a web collection of information on paid or free Design and Development
              tools</p>
          </div>
          <div className="footer__right">
            <div className="footer__box">
              <h3 className="footer__text">Contact Us</h3>
              <a href="#" className="footer__subtext">+621987463</a>
              <a href="#" className="footer__subtext">M Building, No.10 A</a>
              <a href="#" className="footer__subtext">antools@awesome.com</a>
            </div>
            <div className="footer__box">
              <h3 className="footer__text">Categories</h3>
              <a href="#" className="footer__subtext">Design</a>
              <a href="#" className="footer__subtext">Development</a>
            </div>
            <div className="footer__box">
              <h3 className="footer__text">Company Info</h3>
              <a href="#" className="footer__subtext">About Us</a>
              <a href="#" className="footer__subtext">Our Partners</a>
              <a href="#" className="footer__subtext">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer




import React from 'react';
import './hero.css'
import facebook from '../../../assets/img/hero/facebook.svg'
import instagram from '../../../assets/img/hero/instagram.svg'
import twitter from '../../../assets/img/hero/twitter.svg'
import illustration from '../../../assets/img/hero/Illustration.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__left">
            <div className="hero__block">
              <h1 className="hero__title">
                Awesome tools for Designer & Developer
                <span>.</span>
              </h1>
              <p className="hero__subtitle">
                Antool is a web collection of
                information on paid or free Design and
                Development tools
              </p>
              <form className="hero__form">
                <input
                  type="text"
                  name="text"
                  className="hero__search"
                  placeholder="find more than 430+ tools..."
                />
                <input
                  type="submit"
                  name="submit"
                  className="hero__submit"
                  value="Search"
                />
              </form>
            </div>
            <div className="hero__img">
              <a href="#"
              ><img
                className="img_hover"
                src={facebook}
                alt="facebook"
              /></a>
              <a href="#"
              ><img
                className="img_hover"
                src={instagram}
                alt="instagram"
              /></a>
              <a href="#"
              ><img
                className="img_hover"
                src={twitter}
                alt="twitter"
              /></a>
            </div>
          </div>
          <div className="hero__right">
            <img
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero




import React from 'react';
import './brand.css'
import microsoft from '../../../assets/img/brand/logos_microsoft.svg'
import google from '../../../assets/img/brand/logos_google.svg'
import slack from '../../../assets/img/brand/logos_slack.svg'
import wordpress from '../../../assets/img/brand/logos_wordpress.svg'
import Rectangle from '../../../assets/img/brand/Rectangle 308.png'

const Brand = () => {
  return (
    <section className="brand">
      <div className="brand__container">
        <div className="brand__content">
          <h3 className="brand__title">Trusted more than 150+ brand</h3>
          <div className="brand__img">
            <img src={microsoft} alt="logos_microsoft"/>
            <img src={google} alt="logos_google"/>
            <img src={slack} alt="logos_slack"/>
            <img src={wordpress} alt="logos_wordpress"/>
          </div>
        </div>
        <img className="brand__image" src={Rectangle} alt="Rectangle"/>
      </div>
    </section>
  )
}

export default Brand

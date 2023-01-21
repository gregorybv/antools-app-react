import React from 'react';
import './newcomer.css'
import zeplin from '../../../assets/img/newcomer/zeplin.svg'
import flat from '../../../assets/img/newcomer/flat-color-icons_like.svg'
import eva from '../../../assets/img/newcomer/eva_folder-add-outline.svg'
import phpstorm from '../../../assets/img/newcomer/jb_phpstorm.svg'
import toolbox from '../../../assets/img/newcomer/jb_toolbox_app.svg'
import procreate from '../../../assets/img/newcomer/procreate.svg'

const Newcomer = () => {
  return (
      <section className="newcomer">
        <div className="newcomer__container">
          <div className="newcomer__content">
            <div className="newcomer__left">
              <h2 className="newcomer__title">Newcomer Tools</h2>
              <p className="newcomer__subtitle">Wow! see the latest update of the most recommended tools from reliable
                designers and developers</p>
              <button className="newcomer__button">Explore more</button>
            </div>
            <div className="newcomer__right">
              <div className="newcomer__boxs">
                <div className="newcomer__box">
                  <div className="newcomer__header">
                    <img src={zeplin} alt="zeplin"/>
                      <div className="newcomer__hat">
                        <h3 className="newcomer__text">Zeplin</h3>
                        <p className="newcomer__subtext">Free & Paid</p>
                      </div>
                  </div>
                  <p className="newcomer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="newcomer__list">
                    <div className="newcomer__links">
                      <a href="#"><img src={flat} alt="flat-color-icons_like"/></a>
                      <a href="#"><img src={eva}
                                        alt="eva_folder-add-outline"/></a>
                    </div>
                    <button className="newcomer__btn">Visit</button>
                  </div>
                </div>
                <div className="newcomer__box">
                  <div className="newcomer__header">
                    <img src={phpstorm} alt="jb_phpstorm"/>
                      <div className="newcomer__hat">
                        <h3 className="newcomer__text">PHPStorm</h3>
                        <p className="newcomer__subtext">Free</p>
                      </div>
                  </div>
                  <p className="newcomer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="newcomer__list">
                    <div className="newcomer__links">
                      <a href="#"><img src={flat} alt="flat-color-icons_like"/></a>
                      <a href="#"><img src={eva}
                                        alt="eva_folder-add-outline"/></a>
                    </div>
                    <button className="newcomer__btn">Visit</button>
                  </div>
                </div>
              </div>
              <div className="newcomer__boxs">
                <div className="newcomer__box">
                  <div className="newcomer__header">
                    <img src={toolbox} alt="jb_toolbox_app"/>
                      <div className="newcomer__hat">
                        <h3 className="newcomer__text">Toolbox</h3>
                        <p className="newcomer__subtext">Free</p>
                      </div>
                  </div>
                  <p className="newcomer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="newcomer__list">
                    <div className="newcomer__links">
                      <a href="#"><img src={flat} alt="flat-color-icons_like"/></a>
                      <a href="#"><img src={eva}
                                        alt="eva_folder-add-outline"/></a>
                    </div>
                    <button className="newcomer__btn">Visit</button>
                  </div>
                </div>
                <div className="newcomer__box">
                  <div className="newcomer__header">
                    <img src={procreate} alt="procreate"/>
                      <div className="newcomer__hat">
                        <h3 className="newcomer__text">Procreate</h3>
                        <p className="newcomer__subtext">Paid</p>
                      </div>
                  </div>
                  <p className="newcomer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="newcomer__list">
                    <div className="newcomer__links">
                      <a href="#"><img src={flat} alt="flat-color-icons_like"/></a>
                      <a href="#"><img src={eva}
                                        alt="eva_folder-add-outline"/></a>
                    </div>
                    <button className="newcomer__btn">Visit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Newcomer




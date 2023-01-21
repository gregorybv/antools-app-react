import React from 'react';
import './popular.css'
import figma from '../../../assets/img/popular/figma.svg'
import heart from '../../../assets/img/popular/heart.svg'
import folder from '../../../assets/img/popular/folder-add-outline.svg'
import sketch from '../../../assets/img/popular/sketch.svg'
import vsc from '../../../assets/img/popular/visual-studio-code.svg'
import notion from '../../../assets/img/popular/notion.svg'
import slack from '../../../assets/img/popular/slack.svg'
import invision from '../../../assets/img/popular/invision-icon.svg'

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__container">
        <div className="popular__content">
          <div className="popular__hat">
            <h2 className="popular__items">
              Most Popular Tools
            </h2>
            <div className="popular__item">
              Tools for the best Designers and Developers
              most popularly used in the world
            </div>
          </div>
          <div className="popular__mains">
            <div className="popular__main">
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={figma}
                    alt="figma"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      FIGMA
                    </p>
                    <p className="popular__subtitle">
                      Free
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#" className="heart">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="icons_like"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={sketch}
                    alt="sketch"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      Sketch
                    </p>
                    <p className="popular__subtitle">
                      Trial & Paid
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="folder-add-outline"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={vsc}
                    alt="visual-studio-code"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      Visual Studio Code
                    </p>
                    <p className="popular__subtitle">
                      Free
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="folder-add-outline"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="popular__main">
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={notion}
                    alt="notion"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      Notion
                    </p>
                    <p className="popular__subtitle">
                      Free & Paid
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="icons_like"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={slack}
                    alt="figma"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      Slack
                    </p>
                    <p className="popular__subtitle">
                      Free & Paid
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="icons_like"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
              <div className="popular__column">
                <div className="popular__header">
                  <img
                    src={invision}
                    alt="invision"
                  />
                  <div className="popular__titles">
                    <p className="popular__title">
                      Invision
                    </p>
                    <p className="popular__subtitle">
                      Free & Paid
                    </p>
                  </div>
                </div>
                <p className="popular__text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <div className="popular__footer">
                  <div className="popular__icons">
                    <a href="#">
                      <img
                        className="popular__icon"
                        src={heart}
                        alt="icons_like"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={folder}
                        alt="icons_like"
                      />
                    </a>
                  </div>
                  <button className="popular__visit">
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="popular__button">Load more</button>
        </div>
      </div>
    </section>
  )
}

export default Popular




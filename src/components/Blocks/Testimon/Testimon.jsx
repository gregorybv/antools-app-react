import React from 'react';
import './testimon.css'
import chevronleft from '../../../assets/img/testimonial/chevron-left.svg'
import chevronright from '../../../assets/img/testimonial/chevron-left (1).svg'
import Ronald from '../../../assets/img/testimonial/Ronald.png'
import testimonial from '../../../assets/img/testimonial/“.png'
import three from '../../../assets/img/testimonial/three.svg'

const Testimon = () => {
  return (
    <div>
      <section className="testimon">
        <div className="testimon__container">
          <div className="testimon__content">
            <img className="testimon__chevron1" src={chevronleft} alt="chevron-left"/>
              <div className="testimon__block">
                <img src={Ronald} alt="Ronald"/>
                  <img className="testimon__img" src={testimonial} alt="testimonial"/>
                    <p className="testimon__text">Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
                      reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do
                      deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo
                      sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
              </div>
              <img className="testimon__chevron2" src={chevronright} alt="chevron-left (1)"/>
                <div className="testimon__svg">
                  <img src={three} alt="three"/>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimon




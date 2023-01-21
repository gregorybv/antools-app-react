import React from 'react';
import './join.css'

const Join = () => {
  return (
    <section className="join">
      <div className="join__container">
        <div className="join__content">
          <h2 className="join__title">Become a contributor?</h2>
          <p className="join__subtitle">Join us and get tips & tricks to become a great Designer and Developer</p>
          <form className="join__form">
            <input
              type="text"
              name="text"
              className="join__search"
              placeholder="Enter your email..."
            />
            <input
              type="submit"
              name="submit"
              className="join__submit"
              value="Join Us"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Join




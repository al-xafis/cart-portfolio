import React from 'react';
import Button from '../Button/Button';
import './Hero.css';


const Hero = () => {
  return (
    <div className="top_page">
      <div className="hero">
        <div className="hero__top">
          <h1>Add a shopping cart <b>to any website</b></h1>
          <p>Start accepting international payments in minutes</p>
          <Button to="/shop" text="try the cart" yel="true" classh="hero__top__button"/>
        </div>
        <div className="hero__bottom">
          <img src="/pics/imagehome.webp" alt="main image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
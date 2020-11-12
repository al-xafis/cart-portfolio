import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial__container">
      <div className="testimonial__comment">
        "Snipcart is a perfect fit for any web developer’s toolbox! It’s very easy to implement, flexible enough to use on most eCommerce projects and supported by a responsive team who want to see every project succeed."
      </div>
      <div className="testimonial__author">
        <div className="testimonial__author__picture">
          <img src="/pics/anna-brown.webp" alt="author image" /> 
        </div>
        <div className="testimonial__author__info">
          <h4>Anne Brown</h4>
          <p>Freelance Front-end Developer & Owner Media Girl INC</p>
        </div>
      </div>
    </div>
  )
};

export default Testimonial;
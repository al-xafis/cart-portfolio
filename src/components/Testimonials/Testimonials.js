import React from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__title">
        <h3>
          20 000+ developers & merchants <span className="weak">add e-commerce
          <br />to websites with Snipcart.</span>
        </h3>
      </div>
      <div className="testimonial">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
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
        <Testimonial 
        text={`"Snipcart is a perfect fit for any web developer’s toolbox! It’s very easy to implement, flexible enough to use on most eCommerce p
        rojects and supported by a responsive team who want to see every project succeed."`}
        authorPic="/pics/anna-brown.webp"
        authorName="Anna Brown"
        authorPosition="Freelance front-end developer & owner media girl inc"
        />
        <Testimonial 
        text={`"Snipcart provided a low-friction, drop-in cart service that was perfect for our project. Customizing was a piece of cake, and their d
        evoted support and eagerness to evolve have been a constant and pleasant surprise."`}
        authorPic="/pics/pl-cossette-snipcart-testimonial.webp"
        authorName="Matt Stein"
        authorPosition="Developer & founder working concept"
        />
        <Testimonial 
        text={`To me, Snipcart ticked all the boxes: easy integration with website, simple and not over-bloated (i.e. no need for ‘plugins’), but still extremely flexible. A year after integrating Snipcart on my client’s site, their customer base almost doubled!`}
        authorPic="/pics/screen-shot-2019-11-13-at-15444-pm.webp"
        authorName="Liv strawbridge"
        authorPosition="Web & Brand designer no9 Marketing & design"
        />
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';

const Testimonial = ({text, authorPic, authorName, authorPosition}) => {
  return (
    <div className="testimonial__container">
      <div className="testimonial__comment">
        {text}
      </div>
      <div className="testimonial__author">
        <div className="testimonial__author__picture">
          <img src={authorPic} alt="author image" /> 
        </div>
        <div className="testimonial__author__info">
          <h4>{authorName}</h4>
          <p>{authorPosition}</p>
        </div>
      </div>
    </div>
  )
};

export default Testimonial;
import React from 'react';
import Button from '../Button/Button';

const Feature = () => {
  return (
  <div className="feature">
    <div className="feature__description">
      <h3>Add a cart platform to your favorite website stack</h3>
      <p>
        Enable e-commerce on a WordPress blog, an existing site, a SPA, a JAMstack project... anything! 
        Use CMS & frameworks you love, and let our third party shopping cart do the heavy lifting.
      </p>
      <Button text="Learn More" classh="feature__button"/>
    </div>
    <div className="feature__pic">
      <img scr="" alt="feature_pic"/>
    </div>
  </div>
  );
};

export default Feature;
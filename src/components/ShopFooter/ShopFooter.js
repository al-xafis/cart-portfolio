import React from 'react';
import './ShopFooter.css';

const ShopFooter = () => {
  return <div className="shop__footer">
    <div className="shop__footer__content">
      <div className="info">React.js spa site with snipcart e-commerce</div>
      <div className="shop__footer__socials">
        <nav>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a id="last-child" href="#"><i className="fab fa-github-alt"></i></a>
        </nav>
      </div>
    </div>
  </div>
};

export default ShopFooter;
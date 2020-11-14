import React from 'react';
import './ShopNavbar.css';
import { Link } from 'react-router-dom';

const ShopNavbar = () => {
  return (
    <div className="shop__navbar">
      <div className="shop__navbar__content">
        <Link to="/" className="shop__navbar__content__link">&larr; Snipcart.com</Link>
        <div className="shop__navbar__content__title">Snipcart-powered demo store.</div>
      </div>
    </div>
  )
};

export default ShopNavbar;
import React from 'react';
import './ShopProduct.css';

const ShopProduct = ({ title, description, price, img }) => {
  return (
    <div className="shop__body__content">
        <div className="shop__body__content__description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
          <label htmlFor="quantity">QUANTITY</label>
          <input type="number" id="quantity" name="quantity" min="1"/>
          </div>
          <div className="price_tag">${price}</div>
          <button className="shop__button">ADD TO CART</button>
        </div>
        <img src={img} alt="starry night" className="shop__image"/>
      </div>
  )
};

export default ShopProduct;
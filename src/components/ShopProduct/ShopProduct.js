import React, { useState } from 'react';
import './ShopProduct.css';
import { useDispatch } from 'react-redux';
import {addToCart} from '../ShopCart/shopcartsSlice';

const ShopProduct = ({ title, description, price, img, id }) => {

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const parsedPrice = parseFloat((amount*price).toFixed(2));

  return (
    <div className="shop__body__content">
        <div className="shop__body__content__description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
          <label htmlFor="quantity">QUANTITY</label>
          <input type="number" id="quantity" name="quantity" value={amount} onChange={(e) => setAmount(e.target.value)}  min="1"/>
          </div>
          <div className="price_tag">${parsedPrice}</div>
          <button className="shop__button" onClick={() => dispatch(addToCart({title, description, price: parsedPrice, amount, img, id}))}>ADD TO CART</button>
        </div>
        <img src={img} alt="starry night" className="shop__image"/>
      </div>
      // parseFloat(state.overallPrice.toFixed(2))
      // {parseFloat(price * amount).toPrecision(6)}
      
  )
};

export default ShopProduct;
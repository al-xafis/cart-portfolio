import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../ShopCart/shopcartsSlice'

const ShopModalProduct = ({title, description, price, img, amount, id}) => {
  const dispatch = useDispatch();
  return (
    <div className="shop__modal__product clearfix">
          <img src={img} alt="starry night" className="shop__modal__product__image"/>
          <div className="shop__modal__product__header">
            <div>{title}</div>
            <div><i className="far fa-trash-alt red" onClick={() => dispatch(removeFromCart({id: id, price,price}))}></i></div>
          </div>
          <div className="shop__modal__product__description">
          {description}
          </div>
          <div className="shop__modal__product__pricing-container">
            <div className="shop__modal__product__pricing">
              <label className="product__label">Quantity</label>
              <div className="minus-plus">
              <button className="product__button">-</button>
              <span className="product__amount">{amount}</span>
              <button className="product__button">+</button>
              </div>
              <div className="shop__modal__product__total-price">${price}</div>
            </div>
          </div>
        </div>
  )
};

export default ShopModalProduct;
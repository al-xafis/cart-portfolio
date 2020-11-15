import React from 'react';
import './ShopHeader.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopHeader = () => {

  const overallPrice = useSelector(state => state.shopcarts.overallPrice);

  return (
    <div className="shop__header">
      <div className="shop__header__content">
        <div className="shop__header__left">
          <div className="shop__header__imgcontainer">
            <img src="/pics/lilshape.svg" alt="shape" className="imgjon"/>
          </div>
          <h2>ReplicaZone</h2>
        </div>
        <div className="shop__header__right">
        <Link to="#" className="shop__header__auth">Sign In</Link>
        <Link to="#" className="shop__header__cart"><i className="fas fa-cart-arrow-down"></i><span className="price">${overallPrice}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
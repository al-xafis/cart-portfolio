import React from 'react';
import './ShopModal.css';

const ShopModal = () => {
  return (
    <div className="shop__modal">
      <div className="shop__modal__header">
        <button className="shop__modal__close">&larr; Continue shopping</button>
        <div className="shop__modal__title">Cart summary</div>
      </div>
      <div className="shop__modal__products">
        <div className="shop__modal__product">
          <img src="/pics/starry-night.jpg" alt="starry night" className="shop__modal__product__image"/>
          <div className="shop__modal__product__header">
            <div>Irises</div>
            <div>X</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
import React from 'react';
import { useSelector } from 'react-redux';
import ShopModalProduct from '../ShopModalProduct/ShopModalProduct';
import './ShopModal.css';

const ShopModal = () => {
  const products = useSelector(state => state.shopcarts.products)
  const productsList = products.map((product, index) => 
     <ShopModalProduct title={product.title} description={product.description} price={product.price} img={product.img} amount={product.amount} id={index}/>)

  console.log(products);

  const toggleModal = () => {
    const modal = document.querySelector(".shop__modal");
    if (modal.classList.contains('open')) {
      modal.classList.toggle('close');
    } else {
      modal.classList.toggle('open');
    }
  };

  return (
    <div className="shop__modal">
      <div className="shop__modal__header">
        <button className="shop__modal__close" onClick={toggleModal}>&larr; Continue shopping</button>
        <div className="shop__modal__title">Cart summary</div>
      </div>
      <div className="shop__modal__products">
        {productsList}
      </div>
    </div>
  );
};

export default ShopModal;
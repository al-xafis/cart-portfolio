import React from 'react';
import ShopProduct from '../ShopProduct/ShopProduct';
import './ShopBody.css';

const products = [
  {
    title: "Starry Night", 
    description: "High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", 
    price: 79.95, 
    img: "/pics/starry-night.jpg",
    id: 0,
    amount: 1,
  },
  {
    title: "Rosy-Fingered Dawn at Louse Point", 
    description: "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.", 
    price: 49.95, 
    img: "/pics/rosy.jpg",
    id: 1,
    amount: 1,
  },
  {
    title: "Irises", 
    description: "Irises is yet again, another painting by the Dutch artist Vincent van Gogh.", 
    price: 65.95, 
    img: "/pics/irises.jpg",
    id: 2,
    amount: 1,
  },
  {
    title: "Branches with Almond Blossom", 
    description: "Branches with Almond Blossom is another van Gogh painted in 1890.", 
    price: 99.95, 
    img: "/pics/almond.jpg",
    id: 3,
    amount: 1,
  },

]


const ShopBody = () => {
  const renderProducts = products.map((product, index) => (
    <ShopProduct key={index} title={product.title} description={product.description} price={product.price} img={product.img} amount={product.amount} id={product.id}/>
  ));

  return (
    <div className="shop__body">
      {renderProducts}
    </div>
  )
};

export default ShopBody;
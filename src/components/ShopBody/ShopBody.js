import React from 'react';
import ShopProduct from '../ShopProduct/ShopProduct';
import './ShopBody.css';


const ShopBody = () => {
  return (
    <div className="shop__body">
      <ShopProduct 
      title="Starry Night" 
      description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh." price="79.95" 
      img="/pics/starry-night.jpg"
      />
      <ShopProduct 
      title="Rosy-Fingered Dawn at Louse Point"
      description="The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island."
      price="49.95"
      img="/pics/rosy.jpg"
      />
      <ShopProduct 
      title="Irises"
      description="Irises is yet again, another painting by the Dutch artist Vincent van Gogh."
      price="65.95"
      img="/pics/irises.jpg"
      />
      <ShopProduct 
      title="Branches with Almond Blossom"
      description="Branches with Almond Blossom is another van Gogh painted in 1890."
      price="99.95"
      img="/pics/almond.jpg"
      />
    </div>
  )
};

export default ShopBody;
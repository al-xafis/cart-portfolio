import React from 'react';
import ShopBody from '../components/ShopBody/ShopBody';
import ShopFooter from '../components/ShopFooter/ShopFooter';
import ShopHeader from '../components/ShopHeader/ShopHeader';
import ShopModal from '../components/ShopModal/ShopModal';
import ShopNavbar from '../components/ShopNavbar/ShopNavbar';


const Shop = () => {
  return (
    <div>
      <ShopNavbar />
      <ShopHeader />
      <ShopBody />
      <ShopFooter />
      <ShopModal />
    </div>
  )
};

export default Shop;

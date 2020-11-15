import { configureStore } from '@reduxjs/toolkit';
import shopcartsReducer from '../components/ShopCart/shopcartsSlice';

export default configureStore({
  reducer: {
    shopcarts: shopcartsReducer
  }
});
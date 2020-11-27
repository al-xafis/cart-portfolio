import { configureStore } from '@reduxjs/toolkit';
import shopcartsReducer from '../components/ShopCart/shopcartsSlice';
import userReducer from '../components/User/userSlice';

export default configureStore({
  reducer: {
    shopcarts: shopcartsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
});
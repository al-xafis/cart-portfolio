import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  overallPrice: 0.00,
};

const shopcartsSlice = createSlice({
  name: 'shopcarts',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
      state.overallPrice += action.payload.price;
    }
  }
});

export const { addToCart } = shopcartsSlice.actions;

export default shopcartsSlice.reducer;
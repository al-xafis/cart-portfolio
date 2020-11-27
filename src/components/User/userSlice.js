import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    enter(state, action){
      state.user = action.payload;
    },
    exit(state) {
      state.user = {};
    }
  },
})

export const { enter, exit } = userSlice.actions;

export default userSlice.reducer
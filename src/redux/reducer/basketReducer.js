import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  count: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      state.basket = action.payload;
      state.count = action.payload.length;
    },
    remove: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      state.count = state.basket.length;
    },
    clear: () => initialState,
  },
});

export const { add, remove, clear } = basketSlice.actions;

export default basketSlice.reducer;

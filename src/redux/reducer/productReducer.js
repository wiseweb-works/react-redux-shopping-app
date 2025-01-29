import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: '',
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetState: () => initialState,
  },
});

export const { setProducts, setSelected, setLoading, resetState } =
  productSlice.actions;

export default productSlice.reducer;

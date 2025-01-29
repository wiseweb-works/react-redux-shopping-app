import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selected: '',
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const { setProducts, setSelected, setLoading, resetState } =
  productSlice.actions;

export default productSlice.reducer;

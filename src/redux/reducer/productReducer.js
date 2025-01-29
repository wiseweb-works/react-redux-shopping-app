import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selected: '',
  products: [],
  categories: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const fetchWithCategorie = createAsyncThunk(
  'product/fetchWithCategorie',
  async (categorie) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categorie}`
    );
    return response.data;
  }
);

export const getCategories = createAsyncThunk(
  'product/getCategories',
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
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
    setCategories: (state, action) => {
      state.categories = action.payload;
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
      })
      .addCase(fetchWithCategorie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWithCategorie.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const {
  setProducts,
  setSelected,
  setCategories,
  setLoading,
  resetState,
} = productSlice.actions;

export default productSlice.reducer;

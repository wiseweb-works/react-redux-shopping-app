import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducer/basketReducer';
import productReducer from './reducer/productReducer';

export const store = configureStore({
  reducer: {
    baskets: basketReducer,
    product: productReducer,
  },
});

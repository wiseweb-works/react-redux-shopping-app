import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducer/basketReducer';

export const store = configureStore({
  reducer: {
    baskets: basketReducer,
  },
});

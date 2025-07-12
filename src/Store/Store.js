import { configureStore } from '@reduxjs/toolkit';
import prodectReducer from '../Slice/ProdectSlice';

export const store = configureStore({
  reducer: {
    prodect: prodectReducer,
  },
});

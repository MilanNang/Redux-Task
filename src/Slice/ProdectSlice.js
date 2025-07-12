import { createSlice } from '@reduxjs/toolkit';

const ProdectSlice = createSlice({
  name: 'prodect',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = ProdectSlice.actions;
export default ProdectSlice.reducer;

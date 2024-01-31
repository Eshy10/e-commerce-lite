import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types';

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    sortProducts: (state, action: PayloadAction<string>) => {
        // This is an example, you may want to sort products in an async way
        if (action.payload === 'lowest') {
          state.products.sort((a, b) => a.price - b.price);
        } else if (action.payload === 'highest') {
          state.products.sort((a, b) => b.price - a.price);
        }
      },
  },
});

export const { setProducts, sortProducts } = productSlice.actions;


export default productSlice.reducer;

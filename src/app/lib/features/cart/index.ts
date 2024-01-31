import { createSlice } from '@reduxjs/toolkit';
import { CartProps } from '@/types';



const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartProps[],
  reducers: {
    addToCart: (state, action) => {
      const existingCartItems = state.find((item) => item.id === action.payload.id);
      if (existingCartItems) {
        existingCartItems.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
        console.log(state)
      const existingCartItemsIndex = state.findIndex((item) => item.id === action.payload);
      if (state[existingCartItemsIndex].quantity > 1) {
        state[existingCartItemsIndex].quantity -= 1
      } else {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;
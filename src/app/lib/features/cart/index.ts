import { createSlice } from '@reduxjs/toolkit';
import { CartProps } from '@/types';


interface CartState {
  cart: CartProps[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCartItems = state.cart.find((item) => item.id === action.payload.id);
      if (existingCartItems) {
        existingCartItems.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
        console.log(state)
      const existingCartItemsIndex = state.cart.findIndex((item) => item.id === action.payload);
      if (state.cart[existingCartItemsIndex].quantity > 1) {
        state.cart[existingCartItemsIndex].quantity -= 1
      } else {
        const index = state.cart.findIndex((item) => item.id === action.payload);
        state.cart.splice(index, 1);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;
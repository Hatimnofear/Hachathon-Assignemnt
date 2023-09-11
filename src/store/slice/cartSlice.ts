"use client";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {

  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;

}
const initialState: CounterState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      const newProduct = actions.payload.product;
      const alreadyProduct = state.items.find(
        (Product) => Product.id === newProduct.id
        );
        if (alreadyProduct){
          const productIndex = state.items.findIndex( 
            (product) => product.id===newProduct.id);
         //   state.items.slice(productIndex,1,{
         //   ...newProduct,
         //   quantity: newProduct.quantity++,
         //     });
          state.totalQuantity +=  actions.payload.quantity;

        } else {
          state.items.push(newProduct);
         state.totalQuantity +=  actions.payload.quantity;
    }
    },
    removeFromCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity +=  actions.payload.quantity;
    },
    clearCart: (state) => {
      state= initialState
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const cartActions  = cartSlice.actions;

export default cartSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit'
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//       addToCart(state, action) {
//         state.push(action.payload);
//       },
//       deleteFromCart(state, action) {
//         const indexToRemove = state.findIndex((item) => item.id === action.payload.id);
//         if (indexToRemove !== -1) {
//           state.splice(indexToRemove, 1);
//         }
//       },
//     },
//   });

// export const { addToCart, deleteFromCart } = cartSlice.actions

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      const itemIdToDelete = action.payload.id;
      const itemIndexToDelete = state.findIndex(item => item.id === itemIdToDelete);
      if (itemIndexToDelete !== -1) {
        state.splice(itemIndexToDelete, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

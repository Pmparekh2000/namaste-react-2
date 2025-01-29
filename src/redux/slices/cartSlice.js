import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      // If no item exists in the cart
      if (state.length === 0) {
        return [{ id: action.payload?.id, items: [action.payload] }];
      } else {
        const itemInCart = state.filter(
          (item) => item?.id === action.payload?.id
        );

        if (itemInCart.length === 0) {
          // If it's a newly added item to cart
          return [
            ...state,
            { id: action.payload?.id, items: [action.payload] },
          ];
        } else {
          // If the item already exists in the cart
          const updatedItems = state.map((item) => {
            if (item?.id === action.payload?.id) {
              item.items.push(action.payload);
            }
          });
        }
      }
    },
    removeItem: (state, action) => {
      let itemIndex = null;
      state.forEach((item, index) => {
        if (item?.id === action?.payload) {
          itemIndex = index;
        }
      });
      const itemToBeUpdated = state.at(itemIndex);
      const updatedItem = {
        ...itemToBeUpdated,
        items: itemToBeUpdated.items.slice(0, itemToBeUpdated.items.length - 1),
      };
      if (updatedItem.items.length === 0)
        return [...state.slice(0, itemIndex), ...state.slice(itemIndex + 1)];
      else
        return [
          ...state.slice(0, itemIndex),
          updatedItem,
          ...state.slice(itemIndex + 1),
        ];
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addItems, removeItem, clearCart } = cartSlice.actions;

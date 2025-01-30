import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { githubUserApi } from "./slices/userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    [githubUserApi.reducerPath]: githubUserApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubUserApi.middleware),
});

export default appStore;

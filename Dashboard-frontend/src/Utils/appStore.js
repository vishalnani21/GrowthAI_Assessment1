import { configureStore } from '@reduxjs/toolkit';
import businessReducer from "./businessSlice"

const appStore = configureStore({
  reducer: {
    business:businessReducer
  },
});

export default appStore;

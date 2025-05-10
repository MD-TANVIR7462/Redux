import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterSlice";

export const strore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

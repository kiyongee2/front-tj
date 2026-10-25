import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

// store 내보내기
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})
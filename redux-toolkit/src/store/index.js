
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import bankReducer from './bankSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    // counterSlice에서 export한 reducer를 등록
    counter: counterReducer, 

    // bankSlice에서 export한 reducer를 등록
    bank: bankReducer,

    // todoSlice에서 export한 reducer를 등록
    todo: todoReducer
  }
})


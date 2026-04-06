
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0 // 카운트의 초기값을 0으로 설정
}

const counterSlice = createSlice({
  name: 'counter', // slice의 이름을 지정
  initialState,
  reducers: {  // state를 변경하는 reducer 함수를 정의
    // 카운트 값을 1 증가시키는 reducer
    increment: (state) => {
      state.count += 1
    },
    // 카운트 값을 1 감소시키는 reducer
    decrement: (state) => {
      state.count -= 1
    },
    // 카운트 값을 action.payload로 증가시키는 reducer
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    // 카운트 초기화
    reset: (state) => {
      state.count = 0
    }
  }
})

// 액션 생성자와 리듀서를 export
export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset 
} = counterSlice.actions
export default counterSlice.reducer


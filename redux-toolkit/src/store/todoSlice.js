
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

// createSlice 함수를 사용하여 todoSlice 생성
const todoSlice = createSlice({
  name: 'todo', // slice의 이름
  initialState,
  reducers: {
    // 새로운 할 일을 추가하는 reducer
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    //할 일 체크 기능 추가
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    // 특정 id를 가진 할 일을 제거하는 reducer
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer


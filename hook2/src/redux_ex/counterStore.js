import { createStore } from 'redux';

// Action 타입 정의
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_CUSTOM = 'ADD_CUSTOM';

// 초기 상태
const initialState = {
  count: 0,
};

// Reducer 함수
const counterReducer = (state = initialState, action) => {
  console.log('Action:', action);
  
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    case ADD_CUSTOM:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// Redux Store 생성
export const store = createStore(counterReducer);

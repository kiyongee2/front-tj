import React, { useReducer } from "react";

/* reducer 함수는 현재 상태와 액션을 받아 
   새로운 상태를 반환하는 함수입니다. */
const reducer = (state, action) => {
  console.log(state, action);
  
  // 액션의 타입에 따라 상태를 업데이트하는 로직을 구현합니다.
  switch (action.type) { 
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return {count: 0};
    default:
      return state; // 현재 상태를 그대로 반환합니다.
  }
};

const CounterReducer = () => {
  // useReducer 훅을 사용하여 상태와 디스패치 함수를 생성합니다.
  // initialState는 { count: 0 }으로 설정되어 있습니다.
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => 
        dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => 
        dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => 
        dispatch({ type: "RESET" })}>초기화</button>
    </div>
  );
};

export default CounterReducer;
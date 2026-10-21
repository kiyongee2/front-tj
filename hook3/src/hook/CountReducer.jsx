import { useReducer } from "react"

// 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수
const reducer = (state, action) => {
  console.log(state, action);

  switch(action.type){
    case "INCREMENT":
      return {count: state.count + 1};
    case "DECREMENT":
      return {count: state.count - 1};
    case "RESET":
      return {count: 0};
    default:
      return state;
  };
};

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return(
    <div>
      <h2>Counter</h2>
      <h3>{state.count}</h3>
      <button onClick={() => 
        dispatch({type: "INCREMENT"})}>증가</button>
      <button onClick={() => 
        dispatch({type: "DECREMENT"})}>감소</button>
      <button onClick={() => 
        dispatch({type: "RESET"})}>초기화</button>
    </div>
  );
};

export default CountReducer;
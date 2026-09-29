import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);

  switch(action.type){
    case "INCREMENT":
      return {count: state.count + 1}
    default:
      return state;
  }
}


const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return(
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type: "INCREMENT"})}>증가</button>
    </div>
  )
}

export default CountReducer;
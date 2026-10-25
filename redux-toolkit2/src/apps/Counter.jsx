import { useDispatch, useSelector } from "react-redux"
import { 
  increment,
  decrement,
  reset,
  incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return(
    <div>
      <h2>Counter</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(reset())}>리셋</button>

        <div>
          <input 
            type="number" 
            onChange={handleInputChange}
          />
          <button onClick={() => dispatch(incrementByAmount(inputValue))}>입력</button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
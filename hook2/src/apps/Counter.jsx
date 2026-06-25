
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset
} from "../store/counterSlice"

const Counter = () => {
  const count = useSelector(state => state.counter.count)

  const dispatch = useDispatch();

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
    </div>
  )
}

export default Counter;

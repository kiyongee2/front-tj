
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset 
} from "../store/counterSlice"
import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
// counterSlice에서 export한 액션 생성 함수를 가져옴

const Counter = () => {
  // store의 state에서 count 값을 가져옴
  const count = useSelector(state => state.counter.count)
  // input에 입력된 값을 저장할 state
  const [inputValue, setInputValue] = useState(0)

  // input 값이 변경될 때마다 state를 업데이트하는 함수
  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value))
  }
  
  // dispatch 함수를 가져옴 - 액션을 dispatch할 때 사용
  const dispatch = useDispatch()

  // 입력된 값만큼 카운트를 증가시키는 함수
  const handleIncrementAmount = () => {
    dispatch(incrementByAmount(inputValue))
  }

  return (
    <div className="redux-app">
      <h2>Counter</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(reset())}>초기화</button>
      </div>
      <div>
        <input 
          type="number" 
          onChange={handleInputChange}
        />
        <button onClick={handleIncrementAmount}>입력값만큼 증가</button>
      </div>
    </div>
  )
}

export default Counter
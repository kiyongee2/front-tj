import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../store/counterSlice"

const ReduxCounter = () => {
  // store의 state에서 count 값을 가져옴
  const count = useSelector(state => state.counter.count)
  
  // dispatch 함수를 가져옴
  const dispatch = useDispatch()

  // 버튼 클릭 시 count 값을 증가시키는 액션을 dispatch
  const handleIncrement = () => {
    dispatch(increment())
  }

  // count 값 감소
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className="redux-app">
      <h2>Redux 기본 사용법</h2>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  )
}

export default ReduxCounter
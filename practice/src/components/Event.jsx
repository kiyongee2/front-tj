
import { useState } from 'react';

export default function Event() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    alert("버튼이 클릭되었습니다!")
  }

  const square = (x) => {
    console.log(x * x)
  }

  // 절댓값을 구하는 함수
  const handleMyAbs = (x) => {
    console.log(Math.abs(x)) // Math.abs() 함수를 사용
    if (x < 0) {
      console.log(-x)
    } else {
      console.log(x)
    }
  }

  const handleChange = (event) => {
    // setInputValue(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div>
      <h1>Event</h1>
      <button onClick={() => alert("버튼이 클릭되었습니다!")}>클릭</button>
      <button onClick={handleClick}>콘솔</button>
      <button onClick={() => square(5)}>제곱</button>
      <button 
        onClick={
          () => handleMyAbs(-5)
        }>절댓값
      </button>
      <br />
      <input 
        type="text" 
        onChange={handleChange} 
      />
      {/* <p>입력값: {inputValue}</p> */}
    </div>
  )
}
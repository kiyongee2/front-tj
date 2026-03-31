
import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log("렌더링...");
  console.log(countRef); // {current: 0} 객체 - 초기값은 0입니다.
  
  // 상태 증가
  const increaseCount = () => {
    setCount(count + 1);
  }

  // 참조 증가
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>

      <button onClick={increaseCount}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
    </div>
  );
}

export default Counter;
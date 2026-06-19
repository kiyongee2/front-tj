
import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // useRef 훅을 사용하여 countRef라는 
  // 참조 객체를 생성하고 초기값을 0으로 설정
  const countRef = useRef(0); 
  let countVar = 0;  // 일반 변수 - 컴포넌트가 리렌더링될 때마다 초기화
  
  console.log("렌더링...");
  // {current: 0} 객체 - 초기값은 0입니다.
  console.log(countRef);  // countRef.current를 사용
  
  // 상태 증가
  const increaseCount = () => {
    setCount(count + 1);
  }

  // 참조 증가
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  }

  // 일반 변수 증가
  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log("Var:", countVar);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>

      <button onClick={increaseCount}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <button onClick={increaseCountVar}>Var 증가</button>
    </div>
  );
}

export default Counter;
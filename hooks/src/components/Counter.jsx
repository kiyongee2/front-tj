
import React, { useState } from 'react';

const Counter = () => {
  // count 상태와 setCount 함수를 useState 훅을 사용하여 정의
  const [count, setCount] = useState(0);

  // 증가 버튼 클릭 시 호출되는 함수
  const increment = () => {
    setCount(count + 1);
  };

  // 감소 버튼 클릭 시 호출되는 함수
  const decrement = () => {
    setCount(count - 1);
  };

  // 버튼 클릭시 초기화
  const reset = () => {
    setCount(0);
  }

  // 컴포넌트 렌더링
  return (
    <div> 
      <h2>Counter</h2>
      <p>Counter 컴포넌트입니다.</p>
      <p>현재 카운트: {count}</p>
      {/* <button onClick={increment}>증가</button> {" "} */}
      <button onClick={() => setCount(count + 1)}>증가</button> {" "}

      <button onClick={decrement}>감소</button> {" "}
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Counter;




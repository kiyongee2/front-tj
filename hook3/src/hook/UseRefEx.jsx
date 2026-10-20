import { useRef, useState } from "react"

const UseRefEx = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  let countVar = 0;

  console.log("렌더링...");

  console.log(countRef);
  
  
  // 상태 증가
  const increaseCount = () => {
    setCount(count + 1);
  }

  // 참조 증가
  const increaseCountRef = () => {
    countRef.current += 1;
    console.log("Ref: ", countRef.current);
  }

  // 일반 변수 증가
  const increaseCountVar = () => {
    countVar += 1;
    console.log("Var: ", countVar);
  }

  return (
    <div>
      <h2>useRef 예제</h2>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>

      <button onClick={increaseCount}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <button onClick={increaseCountVar}>Var 증가</button>
    </div>
  )
}

export default UseRefEx
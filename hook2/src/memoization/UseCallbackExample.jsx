
import { useState, useCallback, useEffect } from "react";

// useCallback 훅을 사용하여 함수를 메모이제이션
function UseCallbackExample() {
  
  const [number, setNumber] = useState(0);
  /* 클릭하지 않아도 handleClick이 계속 변경되는 이유는
  컴포넌트가 리렌더링될 때마다 handleClick 함수(변수초기화)가 새로 생성되기 때문임.
  useCallback 훅을 사용하여 handleClick 함수를 메모이제이션하면,
  number가 변경될 때만 handleClick 함수가 새로 생성되고,
  그렇지 않을 때는 이전에 생성된 함수를 재사용하게 됩니다. */

  // const handleClick = () => {
  //   console.log("handleClick 실행, number=", number);
  // }

  // [] - 빈 배열일때는 초기값을 기억합니다.
  // number가 변경될 때만 handleClick 함수가 새로 생성됩니다.
  const handleClick = useCallback(() => {
    console.log("number=", number);
  }, [number]); // number가 변경될 때만 handleClick 함수가 새로 생성됩니다.

  useEffect(() => {
    console.log("handleClick 함수가 변경되었습니다.");
  }, [handleClick]); // handleClick이 변경될 때마다 이 useEffect가 실행됩니다.

  return (
    <div>
      <h3>number: {number}</h3>
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default UseCallbackExample;
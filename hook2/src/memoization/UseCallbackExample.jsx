
import { useState, useCallback, useEffect } from "react";

function UseCallbackExample() {
  const [number, setNumber] = useState(0);

  /*const handleClick = () => {
    console.log("handleClick 실행, number=", number);
  }*/

  // number가 변경될 때만 handleClick 함수가 새로 생성됩니다.
  const handleClick = useCallback(() => {
    console.log("number=", number);
  }, [number]); // number가 변경될 때만 handleClick 함수가 새로 생성.

  // useEffect를 사용하여 검증
  useEffect(() => {
    console.log("handleClick 함수가 변경되었습니다.");
  }, [handleClick]); // handleClick이 변경될 때마다 이 useEffect가 실행.

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
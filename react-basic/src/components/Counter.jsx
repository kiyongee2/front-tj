import { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);  //value 값을 0으로 초기화

  useEffect(() => {
    console.log(value);
  })

  const setAddValue = () => {
    setValue(value + 1);
  }

  const setSubValue = () => {
    setValue(value - 1);
  }

  return(
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      {/* <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button> */}
      <button onClick={setAddValue}>증가</button>
      <button onClick={setSubValue}>감소</button>
    </div>
  )
}

export default Counter;


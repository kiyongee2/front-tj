
import { useState, useMemo } from "react";

function useMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo 훅을 사용하여 무거운 계산 결과를 메모이제이션
  const expensiveValue = useMemo(() => {
    console.log("무거운 계산 실행");
    return count * 10000; // 예시로 count에 큰 수를 곱하는 무거운 계산을 수행
  }, [count]); // count가 변경될 때만 무거운 계산이 실행됩니다.

  return (
    <div>
      <h3>결과: {expensiveValue}</h3>

      <button onClick={() => setCount(count + 1)}>
        count 증가
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default useMemoExample;
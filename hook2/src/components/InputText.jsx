
import React, { useState, useRef } from "react";

function InputText() {
  // text는 상태로 관리되고, renderCount는 렌더링 횟수를 추적하는 참조입니다.
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  
  renderCount.current += 1;
  console.log("렌더링 횟수:", renderCount.current);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <p>렌더링 횟수: {renderCount.current}</p>
      <input 
        value={text} 
        onChange={handleChange} 
      />
      <p>입력된 텍스트: {text}</p>
    </div>
  );
}

export default InputText;
import React, { useRef, useEffect } from "react";

// 버튼을 클릭하면 input 요소에 포커스가 이동하는 기능을 구현
function InputFocus() {
  // useRef 훅을 사용하여 input 요소에 대한 참조를 생성
  const inputRef = useRef(null);
  console.log(inputRef); // {current: null} 객체 - 초기값은 null입니다.
  
  useEffect(() => {
    console.log(inputRef);
    // 컴포넌트가 마운트된 후 input 요소에 포커스를 설정
    inputRef.current.focus();
  }, []); 

  const handleSubmit = () => {
    // input 요소의 현재 값을 알림으로 표시
    alert(`환영합니다. ${inputRef.current.value}님`); 
    // console.log(`환영합니다. ${inputRef.current.value}님`);
    
    // 버튼 클릭 후에도 input 요소에 포커스 유지
    inputRef.current.focus(); 
    // 버튼 클릭 후 input 요소의 값을 초기화
    inputRef.current.value = "";
  };

  return (
    <div>
      {/* ref 속성은 특정 DOM 요소에 접근할 수 있게 해줍니다. */}
      <input 
        type="text" 
        ref={inputRef} // input 요소에 대한 참조를 설정
        placeholder="이름을 입력하세요"
      />
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
}

export default InputFocus;
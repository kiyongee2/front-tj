import React, { useRef, useEffect } from "react";

// 버튼을 클릭하면 input 요소에 포커스가 이동하는 기능을 구현
function InputFocus() {
  const inputRef = useRef(null); // input 요소에 대한 참조를 생성
  console.log(inputRef); // {current: null} 객체 - 초기값은 null입니다.
  
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus(); // 컴포넌트가 마운트된 후 input 요소에 포커스를 설정
  }, []); 

  const handleSubmit = () => {
    // input 요소의 현재 값을 알림으로 표시
    // alert(`환영합니다. ${inputRef.current.value}님`); 
    if(!inputRef.current.value){
      alert("이름을 입력하세요.");
      return;
    }
      
    console.log(`환영합니다. ${inputRef.current.value}님`);
    
    inputRef.current.focus();  // 버튼 클릭 후에도 input 요소에 포커스 유지
    inputRef.current.value = ""; // 버튼 클릭 후 input 요소의 값을 초기화
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
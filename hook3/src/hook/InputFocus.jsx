import { useRef } from "react";

//useRef 훅을 사용하여 input 요소에 접근하고 포커스를 제어하는 예제
const InputFocus = () => {
  const inputRef = useRef(null); // input 요소에 접근하기 위한 ref 생성
  console.log(inputRef); // ref 객체 확인 {current: null}

  // 버튼 클릭 시 실행될 함수
  const doClick = () => {
    // 입력값이 없으면 경고
    if (!inputRef.current.value) {
      alert("이름을 입력하세요");
      inputRef.current.focus();
      return;
    }
    alert(`환영합니다. ${inputRef.current.value}님`);
    inputRef.current.focus(); // input 요소에 포커스 설정
    inputRef.current.value = "";
  }

  return(
    <div>
      <h2>DOM 요소에 접근</h2>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="이름을 입력하세요"
      />
      <button onClick={doClick}>가입</button>
    </div>
  )
}

export default InputFocus;
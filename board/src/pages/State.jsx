import { useState } from "react";

//useState() : react hooks

const State = () => {
  // [변수, set변수이름] = useState()
  const [param1, setParam1] = useState("초기값");
  const [param2, setParam2] = useState("");

  const func1 = () => {
    setParam1("안녕하세요");
  }

  const func2 = () => {
    setParam1("");
  }

  // e는 event를 매개변수 : 개발자 도구로 확인, target 객체 확인
  const textInput = (e) => {
    //console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    const {name, value} = e.target;
    //console.log(name, value); 
    setParam2(value);
  }

  return(
    <div className="state-page page">
      <h2>State.jsx</h2>
      <p>{param1}</p>
      <button onClick={func1}>확인</button>
      <button onClick={func2}>취소</button>
      <p />
      <input type="text" onChange={textInput} name="param2"/>
      <p>입력값: {param2}</p>
    </div>
  );
}

export default State;
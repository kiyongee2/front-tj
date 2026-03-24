import { useState } from "react";

const Say = () => {
  const [greet, setGreet] = useState('');
  const [color, setColor] = useState("black");

  const clickEnter = () => {
    setGreet("안녕하세요");
  }
  const clickLeave = () => {
    setGreet("안녕히 가세요");
  }
  return(
    <div className="say">
      <button onClick={clickEnter}>입장</button>
      <button onClick={clickLeave}>퇴장</button>
      <h2 style={{color}}>{greet}</h2>
      <button style={{color: 'red'}}
              onClick={() => {setColor('red')}}>빨강</button>
      <button style={{color: 'green'}}
              onClick={() => {setColor('green')}}>초록</button>
      <button style={{color: 'blue'}}
              onClick={() => {setColor('blue')}}>파랑</button>
    </div>
  )
}

export default Say;
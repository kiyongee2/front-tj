import { useState } from "react"

export default function InputValue(){
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  return(
    <div>
      <h2>입력값 확인</h2>
      <input 
        type="text" 
        value={text}
        onChange={handleInputChange}
        placeholder="글자 입력"
      />
      <p>{text}</p>
    </div>
  )
}
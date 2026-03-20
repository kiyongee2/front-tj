
import { useState } from 'react';

const Example03 = () => {
  const [inputValue, setInputValue] = useState('');

  // 이벤트 핸들링
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  }

  const greet = (name) => {
    alert(`안녕하세요, ${name}님!`);
  }

  // 폼 요소와 이벤트 핸들링
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Example 03</h1> 
      <p>이것은 예제 03입니다.</p>
      {/* 이벤트 핸들링 - 클릭 이벤트 */}
      <button onClick={handleClick}>클릭하세요</button>
      <br />
      {/* 화살표 함수를 사용한 이벤트 핸들링 */}
      <button onClick={() => greet('김도영')}>인사하기1</button>
      <br />
      <br />
      {/* 폼 요소와 이벤트 핸들링 - 입력 이벤트 */}
      <input type="text" onChange={handleInputChange} placeholder="텍스트를 입력하세요" />
      <p>입력된 값: <strong>{inputValue}</strong></p>
    </div>
  )
}

export default Example03



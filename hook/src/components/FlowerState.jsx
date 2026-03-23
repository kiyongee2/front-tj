
import { useState } from 'react'

export default function Flower() {
  // 상태 변수와 상태 업데이트 함수를 선언
  const flowerState = useState('장미'); 
  const flower = flowerState[0]; // 상태 변수
  const setFlower = flowerState[1]; // 상태 업데이트 함수
  console.log(flowerState);

  // const [flower, setFlower] = useState('장미');
  
  function changeFlower() {
    const newFlower = (flower === '장미' ? '개나리' : '장미');
    setFlower(newFlower); // 상태 업데이트 함수 호출
  }

  return (
    <div>
      <h2>Hook - useState</h2>
      <h3>{flower}</h3>
      <button onClick={changeFlower}>변경</button>
    </div>
  )
}




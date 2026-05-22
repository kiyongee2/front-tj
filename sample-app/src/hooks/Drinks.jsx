
import { useState } from "react";

const Drinks = () => {
  //음료 배열 상태 관리 - 초기화
  const [drinks, setDrinks] = useState(['커피', '콜라']);

  const addDrink = () => {
    //기존 drinks 배열에 '딸기쥬스'를 추가하여 새로운 배열 생성
    setDrinks([...drinks, '딸기쥬스'])
  }

  return(
    <div>
      <h2>음료 추가</h2>
      <h4>현재 음료: {drinks.join(', ')}</h4>
      <button onClick={addDrink}>음료 추가</button>
    </div>
  )
}

export default Drinks;
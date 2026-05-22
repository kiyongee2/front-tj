
import { useState } from "react"
import DrinkList from "./DrinkList";

const Drinks2 = () => {
  const [drinks, setDrinks] = useState([]);
  //입력 필드의 상태 관리
  const [inputValue, setInputValue] = useState('');

  const addDrink = () => {
    const newDrink = inputValue.trim();
    if(newDrink == ''){
      alert('음료 이름을 입력하세요');
      return;
    }
    //새 음료를 기존 배열에 추가
    setDrinks([...drinks, newDrink]);
    setInputValue('');  //입력 필드 초기화
  }

  return (
    <div>
      <h2>음료 추가</h2>
      <input 
        type="text" 
        placeholder="음료 이름을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addDrink}>음료 추가</button>
      
      {/* DrinkList 컴포넌트 연결 */}
      <DrinkList 
        drinks={drinks}
      />
    </div>
  )
}

export default Drinks2;

import React, { useState } from 'react';
import DrinkList from './DrinkList';

const AddDrink2 = () => {
  // 음료 이름을 저장하는 상태 변수
  const [drinkName, setDrinkName] = useState([]);
  // 입력 필드의 상태를 관리하기 위한 상태 변수
  const [input, setInput] = useState(''); 

  // 음료 추가 함수
  const handleAddDrink = () => {
    const newDrink = input.trim();
    if (newDrink === '') {
      alert('음료 이름을 입력해주세요.');
      return;
    }
    // 새로운 음료를 drinkName 상태에 추가
    setDrinkName([...drinkName, newDrink]);
    setInput(''); // 입력 필드 초기화
  };

  return (
    <div>
      <h2>음료 추가</h2>
      <p>음료 추가 컴포넌트입니다.</p>
      <input
        type="text"
        placeholder="음료 이름을 입력하세요"  
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button onClick={handleAddDrink}>음료 추가</button>
      
      {/* DrinkList 컴포넌트에 drinkName 상태를 전달 */}
      <DrinkList drinks={drinkName} />
    </div>
  );
}

export default AddDrink2;
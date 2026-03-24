import React, { useState } from 'react';

const AddDrink3 = () => {
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

  // 음료 삭제 함수
  const handleDeleteDrink = (index) => {
    //(_, i) -> _는 현재 요소(음료 이름)를 사용하지 않음, i는 현재 요소의 인덱스
    const updatedDrinks = drinkName.filter((_, i) => i !== index);
    setDrinkName(updatedDrinks);
  };

  return (
    <div>
      <h2>음료 추가 및 삭제</h2>
      <p>음료를 추가하고 삭제할 수 있습니다.</p>
      <input
        type="text"
        placeholder="음료 이름을 입력하세요"  
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button onClick={handleAddDrink}>음료 추가</button>
      
      {/* 음료 목록 출력 및 삭제 버튼 */}
      <ul>
        {drinkName.map((drink, index) => (
          <li key={index}>
            {drink} 
            <button 
              onClick={() => handleDeleteDrink(index)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      {/* 음료가 없을 때 메시지 표시 */}
      {drinkName.length === 0 && <p>추가된 음료가 없습니다.</p>}
    </div>
  );
}

export default AddDrink3;

import { useState } from "react";
import DrinkList from "./DrinkList";

const Drinks2 = () => {
  const [drinks, setDrinks] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const addDrink = () => {
    const newDrink = inputValue;
    if(newDrink == ''){
      alert("음료를 입력하세요");
      return;
    }

    setDrinks([...drinks, newDrink]);
    setInputValue('');
  }

  return(
    <>
      <h2>음료 추가</h2>
      <input 
        type="text" 
        placeholder="음료 이름 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* 입력값 출력 */}
      {/* <p>입력값: {inputValue}</p> */}

      <button onClick={addDrink}>음표 추가</button>
      {/* 음료 목록 */}
      <DrinkList drinks={drinks} />
      {/* <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul> */}
    </>
  )
}

export default Drinks2;
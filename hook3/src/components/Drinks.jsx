import { useState } from "react";

const Drinks = () => {
  const [drinks, setDrinks] = useState(["커피", "콜라"]);

  const addDrink = () => {
    setDrinks([...drinks, "딸기주스"])

  }

  return(
    <>
      <h2>음료 추가</h2>
      <h4>현재 음료: {drinks.join(', ')}</h4>
      <button onClick={addDrink}>음표 추가</button>
    </>
  )
}

export default Drinks;
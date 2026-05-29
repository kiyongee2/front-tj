import { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    brand: "현대",
    model: "Sonata",
    year: 2023
  })

  const updateYear = () => {
    setCar({...car, year: 2026})
  }

  return(
    <div>
      <h2>자동차 컴포넌트</h2>
      <p>브랜드: {car.brand}</p>
      <p>모델: {car.model}</p>
      <p>연식: {car.year}</p>
      <button onClick={updateYear}>연식 업데이트</button>
    </div>
  )
}

export default Car;
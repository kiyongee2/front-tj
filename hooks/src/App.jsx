import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import AddDrink from './components/AddDrink'
import Car from './components/Car'
import AddProduct from './components/AddProduct'
import AddProduct2 from './components/AddProduct2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>리엑트 상태 관리</h2>
        {/* <Counter /> */}
        {/* <AddDrink /> */}
        {/* <Car /> */}
        {/* <AddProduct /> */}
        <AddProduct2 />
      </div>
    </>
  )
}

export default App

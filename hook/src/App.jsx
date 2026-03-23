import { useState } from 'react'
import Profile from './card/Profile'
import './App.css'
import Counter from './components/Counter'
import AddProduct from './components/AddProduct'
import AddDrink from './components/AddDrink'
import Car from './components/Car'
import AddProduct2 from './components/AddProduct2'


function App() {
  const dogInfo = {
    breed: '말티즈',
    age: 2,
    color: '흰색'
  }

  return (
    <>
      <div className="app">
        {/* <Car /> */}
        {/* <AddProduct /> */}
        {/* <AddDrink /> */}
        <AddProduct2 />
      </div>
    </>
  )
}

export default App

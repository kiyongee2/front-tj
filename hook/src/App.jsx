import { useState } from 'react'
import Profile from './card/Profile'
import './App.css'
import Counter from './components/Counter'
import AddProduct from './components/AddProduct'
import AddDrink from './components/AddDrink'
import Car from './components/Car'
import AddProduct2 from './components/AddProduct2'
import AddDrink2 from './components/AddDrink2'
import AddDrink3 from './components/AddDrink3'
import Clock from './effect/Clock'
import User from './effect/User'


function App() {
  // const dogInfo = {
  //   breed: '말티즈',
  //   age: 2,
  //   color: '흰색'
  // }

  return (
    <>
      <div className="app">
        {/* <Car /> */}
        {/* <AddProduct /> */}
        {/* <AddDrink /> */}
        {/* <AddProduct2 /> */}
        {/* <Sample01 /> */}
        <AddDrink2 />
        {/* <AddDrink3 /> */}
        {/* <Clock /> */}
        {/* <User /> */}
      </div>
    </>
  )
}

export default App

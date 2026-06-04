import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/new-product' element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

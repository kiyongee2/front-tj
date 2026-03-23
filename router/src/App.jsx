import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          {/* <Main /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'

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
            {/* URL 파라미터를 포함한 경로 설정 */}
            {/* :id는 URL에서 동적으로 변하는 부분을 나타냅니다. */}
            {/* 예를 들어, /products/1, /products/2 등 다양한 상품 ID에 대응. */}
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    )
}

export default App

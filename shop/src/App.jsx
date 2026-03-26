import './App.css'
import { useState } from 'react'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 로그인한 사용자 ID 관리
  const [userId, setUserId] = useState('')

  // 로그인 핸들러
  const handleLogin = (loginUserId) => {
    setIsLoggedIn(true) // 로그인 성공 시 상태 업데이트
    setUserId(loginUserId) // 로그인한 사용자 ID 저장
  }

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserId('')
  }

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} userId={userId} onLogout={handleLogout} />
          {/* <Main /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            {/* URL 파라미터를 포함한 경로 설정 */}
            {/* :id는 URL에서 동적으로 변하는 부분을 나타냅니다. */}
            {/* 예를 들어, /products/1, /products/2 등 다양한 상품 ID에 대응. */}
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    )
}

export default App

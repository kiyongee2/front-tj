import './App.css'
import { useState } from 'react'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 로그인한 사용자 ID 관리
  const [username, setUsername] = useState('')

  // 로그인 핸들러
  const handleLogin = (username) => {
    setIsLoggedIn(true) // 로그인 성공 시 상태 업데이트
    setUsername(username) // 로그인한 사용자 ID 저장
  }

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />         
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    )
}

export default App

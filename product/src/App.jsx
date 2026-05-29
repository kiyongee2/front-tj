import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './member/Home'
import SignIn from './member/SignIn'
import SignUp from './member/SignUp'

function App() {

  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/sign-in">로그인</Link>
            <Link to="/sign-up">회원가입</Link>
          </div>

          <div className='contents'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App


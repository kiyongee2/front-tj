import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Event from './components/Event'
import UserList from './components/UserList'
import Like from './components/Like'
import SignUp from './forms/SignUp'

function App() {
  const user = "김기용"
  const site = {
    name: "네이버",
    url: "https://www.naver.com"
  }

  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = "로그인 성공!";
  } else {
    message = "로그인 실패!";
  }

  return (
    <>
      <SignUp />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
      <section className="app">
        <Board />
      </section>
    </>
  )
}

export default App

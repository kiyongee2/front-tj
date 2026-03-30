import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainPage from './components/MainPage'
import FetchExample from './async/FetchExample'
import Blocks from './components/Blocks'
import ButtonSample from './components/ButtonSample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <MainPage /> */}
        {/* <FetchExample /> */}
        <Blocks />
        {/* <ButtonSample /> */}
      </div>
    </>
  )
}

export default App

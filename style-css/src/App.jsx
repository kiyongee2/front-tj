import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainPage from './components/MainPage'
import FetchExample from './fetch_ex/FetchExample'
import Blocks from './components/Blocks'
import ButtonSample from './components/ButtonSample'
import FetchExample02 from './fetch_ex/FetchExample02'
import AxiosExample from './axios_ex/AxiosExample'
import AxiosExample2 from './axios_ex/AxiosExample2'

function App() {

  return (
    <>
      <div className="App">
        {/* <ButtonSample /> */}

        {/* <MainPage /> */}
        <Blocks />

        {/* <FetchExample /> */}
        {/* <FetchExample02 id={4} /> */}

        {/* <AxiosExample /> */}
        {/* <AxiosExample2 id={4} /> */}
      </div>
    </>
  )
}

export default App

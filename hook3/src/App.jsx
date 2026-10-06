import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SignUp from './users/SignUp'
import SignIn from './users/SingIn'
import Home from './layouts/Home'
import Header from './layouts/Header'
import InputValue from './components/InputValue'
import Drinks2 from './components/Drinks2'
import Clock from './use_effects/Clock'
import User from './use_effects/User'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SignUp from './users/SignUp'
import SignIn from './users/SingIn'
import Home from './layouts/Home'
import Header from './layouts/Header'
import InputValue from './components/InputValue'
import Drinks2 from './components/Drinks2'
import Clock from './hook/Clock'
import User from './hook/User'
import UseRefEx from './hook/UseRefEx'
import InputFocus from './hook/InputFocus'

function App() {

  return (
    <>
      <section className="app">
        {/* <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter> */}
        <UseRefEx />
        {/* <InputFocus /> */}
      </section>
    </>
  )
}

export default App

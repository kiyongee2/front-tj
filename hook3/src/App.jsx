import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SignUp from './users/SignUp'
import SignIn from './users/SingIn'
import Home from './layouts/Home'
import Header from './layouts/Header'

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

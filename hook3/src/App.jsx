import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SignUp from './users/SignUp'
import SignIn from './users/SingIn'
import Home from './layouts/Home'
import Header from './layouts/Header'
import InputValue from './components/InputValue'
import Drinks2 from './components/Drinks2'
import Clock from './hook/Clock'
import UserParent from './use_context/UserParent'
import UseRefEx from './hook/UseRefEx'
import InputFocus from './hook/InputFocus'
import CountReducer from './hook/CountReducer'
import { AuthProvider } from './use_context/AuthProvider'
import { Status } from './use_context/Status'
import Box from './use_context/Box'

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
        {/* <UseRefEx /> */}
        {/* <InputFocus /> */}
        {/* <CountReducer /> */}
        {/* <UserParent /> */}
        {/* <AuthContext /> */}
        <AuthProvider>
          <Status />
        </AuthProvider>
        {/* <Box>
          <h3>박스 안의 내용</h3>
          <p>이것은 BOX 컴포넌트 안에 있는 내용입니다.</p>
        </Box> */}
      </section>
    </>
  )
}

export default App

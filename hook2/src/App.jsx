
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import CounterReducer from './reducer/CounterReducer'
import BankReducer from './reducer/BankReducer'
import BankReducer2 from './reducer/BankReducer2'
import ThemeContextProvider from './context/ThemeContextProvider'
import ParentProps from './props/ParentProps'
import UserContext from './context/User'
import ReduxExample from './redux_ex/ReduxExample'
import UseCallbackExample from './memoization/UseCallbackExample'
import ParentTheme from './theme/ParentTheme'

function App() {

  return (
    <>
      <main className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<CounterReducer />} /> */}
            <Route path="/counter-reducer" element={<CounterReducer />} />
            <Route path="/bank-reducer" element={<BankReducer />} />
            {/* <Route path="/memo-callback" element={<UseCallbackExample />} /> */}
            <Route path='/theme-parent' element={<ParentTheme />} />
            {/* <Route path="/bank-reducer2" element={<BankReducer2 />} /> */}
            {/* <Route path="/theme-context" element={<ThemeContextProvider />} /> */}
            {/* <Route path="/parent-props" element={<ParentProps />} /> */}
            {/* <Route path="/user-context" element={<UserContext />} /> */}
            {/* <Route path="/redux-example" element={<ReduxExample />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App

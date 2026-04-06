
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import Counter from './apps/Counter'
import Bank from './apps/Bank'
import Todos from './apps/Todos'

function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

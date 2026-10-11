import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Board from './board/Board'
import BoardDetail from './board/BoardDetail'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Board />} />
            <Route path='/board' element={<Board />} />
            <Route path='/board/:id' element={<BoardDetail />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import FetchTodos from './fetch_ex/FetchTodos'
import FetchTodoById from './fetch_ex/FetchTodoById'
import AxiosTodos from './axios_ex/AxiosTodos'
import AxiosTodoById from './axios_ex/AxiosTodoById'
import AxiosPost from './axios_ex/AxiosPost'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<FetchTodos />} />
          <Route path='/:id' element={<FetchTodoById />} /> */}

          {/* axios */}
          <Route path='/' element={<AxiosTodos />} />
          <Route path='/axios/:id' element={<AxiosTodoById />} />
          <Route path='/axios-post' element={<AxiosPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

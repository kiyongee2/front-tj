import { useState } from 'react'
import './App.css'


import FetchTodos from './fetch_ex/FetchTodos'
import FetchTodoById from './fetch_ex/FetchTodoById'
import AxiosTodos from './axios_ex/AxiosTodos'
import AxiosTodoById from './axios_ex/AxiosTodoById'
import AxiosPost from './axios_ex/AxiosPost'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <section className='app'>
      <BrowserRouter>
        <Routes>
          {/* Fetch Todo */}
          {/* <Route path="/" element={<FetchTodos />} />
          <Route path="/:id" element={<FetchTodoById />} /> */}

          {/* Axios Todo */}
          <Route path="/axios" element={<AxiosTodos />} />
          <Route path="/axios/:id" element={<AxiosTodoById />} />
          <Route path="/axios-post" element={<AxiosPost />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App


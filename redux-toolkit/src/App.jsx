
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ReduxApp from './basic-app/ReduxCounter'

function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ReduxCounter />} />
            <Route path="/redux-app" element={<ReduxCounter />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

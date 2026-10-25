import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layouts/Header';
import ProductList from './pages/ProductList';
import Notice from './pages/Notice';

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/notice' element={<Notice />} />
            </Routes>
          </main>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App;

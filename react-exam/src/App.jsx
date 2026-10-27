import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layouts/Header';
import ProductList from './pages/ProductList';
import Notice from './pages/Notice';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;

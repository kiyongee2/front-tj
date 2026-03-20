import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import State from './pages/State';
import Boardlist from './pages/Boardlist';
import Boardlist2 from './pages/Boardlist2';

function App() {
  return (
    <div className="App">
      {/* 라우팅 전에 { BrowserRouter, Route, Routes } 임포트함 */}
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/state' element={<State />} />
        <Route path='/board/:id' element={<Boardlist />} />
        <Route path='/board' element={<Boardlist2 />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

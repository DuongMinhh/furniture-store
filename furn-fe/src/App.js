import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import './scss/GlobalStyle.scss'
import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trang-chu' element={<HomePage />} />
        <Route path='/san-pham' element={<ProductPage />} />
        <Route path='/chi-tiet-san-pham/:productId' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

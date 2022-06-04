import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import './scss/GlobalStyle.scss'
import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminHomePage from './pages/AdminHomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* For end user */}
        <Route path='/' element={<HomePage />} />
        <Route path='/trang-chu' element={<HomePage />} />
        <Route path='/san-pham' element={<ProductPage />} />
        <Route path='/chi-tiet-san-pham/:productId' element={<ProductDetailPage />} />

        {/* For admin */}
        <Route path='/admin/' element={<AdminHomePage />} />
      </Routes>
    </div>
  );
}

export default App;

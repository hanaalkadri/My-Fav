import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Assets/Navbar/Navbar'; // ✅ تأكد من المسار الصحيح

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women" />} />
        <Route path='/kids' element={<ShopCategory category="kids" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

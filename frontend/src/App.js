import { Routes, Route } from 'react-router-dom';
import './App.css';

import ShopsPage from './pages/ShopsPage';
import CartPage from './pages/ShopsPage';
import SingleShopPage from './pages/SingleShopPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<ShopsPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='/:shop' element={<SingleShopPage />} />
          <Route path='*' element={<NotFoundPage />} />         
        </Route>
      </Routes>

    </div>
  );
}

export default App;
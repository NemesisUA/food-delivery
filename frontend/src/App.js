import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shops from './pages/Shops';
import Cart from './pages/Shops';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Shops />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

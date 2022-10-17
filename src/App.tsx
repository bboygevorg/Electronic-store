import {Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './scss/style.module.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

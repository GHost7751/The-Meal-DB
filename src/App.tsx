import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Components/Home/Home';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import SRM from './Components/SRM/SRM';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SingleRandomMea' element={<SRM />} />
            <Route path='/Categories' element={<Categories />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

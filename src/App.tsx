import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Components/Home/Home';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import SRM from './Components/SRM/SRM';
import Categories from './Components/Categories/Categories';
import FilterCategories from './Components/FilterCategories/FilterCategories';
import Recipe from './Components/Recipe/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SingleRandomMea' element={<SRM />} />
            <Route path='/Categories' element={<Categories />} />
            <Route path='/Filter/:name' element={<FilterCategories />} />
            <Route path='/Recipe/:id' element={<Recipe />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Aboit from './Pages/Aboit';
import Home from './Pages/Home';

const AllRoutes = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Aboit" element={<Aboit/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
        </Routes>
        </div>
       
    );
}

export default AllRoutes;

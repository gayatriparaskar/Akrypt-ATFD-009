import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import User from './User';
import Carier from './Carier';
import HOME from './HOME';
import UserDetail from './UserDetail';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HOME/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Blog" element={<Blog/>}></Route>
                <Route path="/User" element={<User/>}></Route>
                <Route path="/Carier" element={<Carier/>}></Route>
                <Route path="/User/:id" element={<UserDetail/>}></Route>
            </Routes>
            </div>
    );
}

export default Routers;

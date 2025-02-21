import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User';
import About from './About';
import Blog from './Blog';
import Linkroot from './Linkroot';
import Routers from './Routers';

const Rootrouting = () => {
    return (
        <div>
            <h1> Root Routing </h1>
           <Linkroot/>
           <Routers/>
          
        </div>
    );
}

export default Rootrouting;

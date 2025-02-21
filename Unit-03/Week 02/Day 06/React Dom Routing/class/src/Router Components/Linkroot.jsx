import React from 'react';
import { Link } from 'react-router-dom';

const Linkroot = () => {
    return (
        <div className=' flex , justify-around , m-5 , border-1 border-solid '>
        <Link to="/">HOME</Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/Blog">BLOG</Link>
        <Link to="/User">Users</Link>
        <Link to="/Carier">Carrer</Link>
    </div>
    );
}

export default Linkroot;

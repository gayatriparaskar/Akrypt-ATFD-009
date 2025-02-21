import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around border-1 border-solid w-100 m-auto bg-gray-100 text-blue-500'>
            {/* <ul className="list-disc ml-100 block ">
            <li><Link to="/">Home</Link></li>
                <li><Link to="/aboit">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/product">Product</Link></li>     
             </ul> */}
             <Link to="/">Home</Link>
             <Link to="/Aboit">About</Link>
             <Link to="/Contact">Contact</Link>
             <Link to="/Products">Product</Link>
        
        </div>
       
    );
}

export default Navbar;

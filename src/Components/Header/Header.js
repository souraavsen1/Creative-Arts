import React from "react";
import { Link } from "react-router-dom";
import nav_logo from "../Images/navimg.png";
import '../Custom.css'

const Header = () => {
  return (
    <div className='bg-black bg-opacity-75 sticky top-0 z-50'>
      <div className='w-5/6 mx-auto flex items-center justify-between py-2 text-white'>
        {/* Link is for changing routes without reloading */}
        <Link to='/'>
          <div className='flex items-center'>
            <img src={nav_logo} width='45px' alt='' />
            <h3 className='text-3xl font-semibold pl-2 '>
              Creative{" "}
              <span className='text-green-400 font_akronim'>
                Arts <i class='fas fa-palette pl-1 text-2xl'></i>
              </span>
            </h3>
          </div>
        </Link>
        <div className='w-4/12 flex justify-between items-center'>
          <Link to='/' className='text-md font-semibold hover:text-green-400'>
            Home
          </Link>
          <Link
            to='/about'
            className='text-md font-semibold hover:text-green-400'
          >
            About
          </Link>
          <Link
            to='/services'
            className='text-md font-semibold hover:text-green-400'
          >
            Services
          </Link>
          <Link
            to='/features'
            className='text-md font-semibold hover:text-green-400'
          >
            Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

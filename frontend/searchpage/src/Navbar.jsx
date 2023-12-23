// Navbar.js
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
return(
    <div className='flex w-screen shadow-md no-underline fixed z-10 pt-5 drop-shadow h-15 items-center justify-between bg-custom-bg-color px-10 py-3 text-white '>
      <div className='font-light ml-20 animate-bounce text-white text-5xl flex'>
        <img src="../elements/logo.svg" alt="Logo" />
      </div>
      <div className='items-baseline flex w-navigation-links justify-between'>
        <div className='flex w-400 text-white items-baseline font-light ml-10 text-lg gap-20'>
          <a href="/artists" className='hover:text-red-600 text-white'>
            Artists
          </a>
          <a href="/discover" className='hover:text-red-600 text-white'>
            Discover
          </a>
          <a href="/contact" className='hover:text-red-600 text-white'>
            Contact us
          </a>
          <a href="/join" className='hover:text-red-600 text-white'>
            Join Us
          </a>
        </div>
        <div className='text-white mr-12 pl-12 text-lg cursor-pointer hover:left-1/4' >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      </div>

      
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isSearchVisible, toggleSearch }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        toggleSearch();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleSearch]);

  const handleSearchClick = (event) => {
    event.stopPropagation();
    toggleSearch();
  };

  return (
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
        <div className='flex text-white mr-12 pl-12 text-lg  pt-4 cursor-pointer hover:left-1/4 gap-8'>
          <FontAwesomeIcon className='hover:text-red-500' onClick={handleSearchClick} icon={faSearch} />
          
        </div>
      </div>

      {isSearchVisible && (
        <div
          id='search-bar'
          ref={searchRef}
          className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center text-black'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            className='rounded-full drop-shadow shadow-md border-transparent w-96 h-12 p-4 focus:border-blue-500 focus:border-2'
            placeholder='Search . . .'
            type='text'
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

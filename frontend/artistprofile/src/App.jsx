import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import './App.css';

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <>
      <div className='flex flex-col w-screen gap-12 min-h-screen bg-custom-bg-color overflow-x-hidden'>
        <Navbar isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} closeSearch={closeSearch} />
        <div className='flex felx-col w-screen justify-center p-4 '>
          <div className='w-10/12 h-96 shadow-2xl mt-24 hover:shadow-lg flex p-12 bg-gray-700 rounded-lg'>
            <img className='w-1/5' src="./elements/default.svg" alt="" />
            <div className='flex flex-col text-white text-left gap-12 ml-12 mt-16'>
              <div className='font-bold text-2xl'><p>Adjissi Fatima Amina</p></div>
              <div className='font-thin text-lg'><span>4</span> Albums</div>
              <div className='font-thin text-lg'><span>4</span> Songs</div>
            </div>
          </div>
        </div>
        <p className='text-left text-white text-3xl ml-24'>Songs </p>
        <div>
          <Slider></Slider>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

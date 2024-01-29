// App.jsx
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';
import Footer from './Footer';

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
      <div className='flex flex-col w-screen gap-12 min-h-full bg-custom-bg-color overflow-x-hidden	'>
        <Navbar isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} />
        <div
          className={`flex w-full h-4/5 bg-repeat pt-40 items-center justify-between text-white font-thin gap-4${
            isSearchVisible ? ' blur-background' : ''
          }`}
        >
          <div>
            <img className='w-1/2 ml-20' src='./elements/cheb.svg' alt='' />
          </div>

          <div className='flex-col w-1/2 mx-2 pt-24 h-96'>
            <p className='text-7xl font-thin py-3 '>Feel the Music</p>
            <div className='py-4 mt-4'>
              <TypeAnimation
                sequence={[
                  'Search your music by Title . . . ',
                  1000,
                  'Search your music by Album . . .   ',
                  1000,
                  'Search your music by Artist . . .  ',
                  1000,
                ]}
                speed={20}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>

            <button className='bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6'>
              Stream Now
            </button>
          </div>
        </div>

        <div className='h-full min-w-max p-12 mt-6 ml-20 flex justify-between' onClick={closeSearch}>
          <div className='text-white flex-col mr-32'>
            <p className='text-4xl font-thin'>Discover New Music</p>
            <div className='flex gap-10 cursor-pointer w-32 mt-24'>
              
            </div>
            <p className='text-2xl mt-16 font-thin w-96 '>
              Listen to the largest collection and the latest albums only on Nuba.
            </p>
          </div>

          <div
            className='w-4/12 mr-12 bg-cover drop-shadow-2xl opacity-75'
            style={{ backgroundImage: "url('./elements/picpic.svg')" }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

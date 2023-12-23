import React from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Audio from './Audio'; // Import your custom Audio component

function App() {
  
  return (
    <>
      <div className='flex flex-col w-screen min-h-screen m-auto bg-custom-bg-color scrol-x-hidden '>
        <Navbar></Navbar>
        <div className='w-screen mt-64 mb-60 ml-12 mr-12'>
          <div className='flex '>
            <div className='bg-cardcolor rounded-lg w-64 h-80 drop-shadow-sm'>
              <Audio src='./audios/test1.mp3' />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

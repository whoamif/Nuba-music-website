import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Slider';

function App() {
  
  return (
    <>
      <div className='flex flex-col w-screen min-h-screen m-auto bg-custom-bg-color scrol-x-hidden '>
        <Navbar></Navbar>
        <div className='w-screen p-10 min-h-72 mt-24  felx  justify-center	'>
         <div className='flex justify-center  text-white justify-self-end	'> <img  className='w-44'src=" ./elements/songs.svg" alt="" />  {/*<p className=' mt-4 '>Pull to see more </p>*/}</div> 
         
         <div className='mt-4'> 
         <Slider></Slider>

         </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

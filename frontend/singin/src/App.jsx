import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='flex flex-col bg-custom-bg-color w-screen p-0 h-screen gap-2 m-auto place-items-center'>
        <div className='flex p-10 justify-between w-full'>
          <div>
            <img className='animate-bounce' src="./elements/logo.svg" alt="" />
          </div>
          <div>
            <a href="" className='cursor-pointer text-white text-xl hover:text-red-500'>Discover</a>
          </div>
        </div>
        <div className='flex  gap-36 '>
          <div className='flex flex-col gap-64'>
            <div className='text-5xl font-thin flex flex-col gap-10 text-white'>
              <p className='text-pink-500'>el jdid hebo </p>
              <p className='text-blue-500 pl-40'>w el 9dim metfret fih </p>
            </div>
            <div className='flex gap-5 ml-52'>
              <img className='w-40' src="./elements/pic1.svg" alt="" />
              <img className='w-40' src="./elements/pic2.svg" alt="" />
              <img className='w-40' src="./elements/pic3.svg" alt="" />
            </div>
          </div>
          <div className='bg-black w-2/6 h-7/12 font-thin text-lg rounded-md drop-shadow-xl text-white p-10 pt-32 flex flex-col gap-5 '>
            <p className='pr-96' >Email </p>
            <input className='w-96 h-12 p-2 rounded-dm border-white border-2 hover:border-blue-500  focus:border-green-200 bg-black' type="email" name="email" />
            <p className='pr-96'>Password</p>
            <div className='relative'>
              <input
                className='w-96 h-12 p-2 rounded-dm border-white border-2 hover:border-blue-500 focus:border-green-200 bg-black'
                type={showPassword ? "text" : "password"}
                name='password'
              />
              <span 
                onClick={() => setShowPassword(!showPassword)}
                className=' flex ml-72 mt-2 hover:text-red-500	cursor-pointer text-white'
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button className='bg-red-900 w-96 h-12 mt-12 rounded-dm hover:bg-red-500'> Log in</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

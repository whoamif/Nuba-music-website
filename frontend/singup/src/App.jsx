import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='flex flex-col bg-custom-bg-color w-screen  h-screen m-auto  items-center'>
        <div className='flex pt-12 pl-4 pr-4 justify-between w-full'>
          <div>
            <img className='animate-bounce' src="./elements/logo.svg" alt="" />
          </div>
          <div>
            <a href="" className='cursor-pointer text-white text-xl hover:text-red-500'>Discover</a>
          </div>
        </div>
        <div className='flex  gap-36 h-full w-screen mb-2'>
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
          <div className='bg-black w-2/6 h-full font-thin text-lg rounded-md drop-shadow-xl text-white   pt-10 pb-4 flex flex-col gap-2 mb-4 place-items-center '>
            <p className='pr-80' >Name </p>
            <input className='w-96 h-12 p-2 rounded-dm border-white border-2 hover:border-blue-500  focus:border-green-200 bg-black' type="name" name="name" />
            <div className='flex gap-5 '>
              <input className='w-6' type="radio" id="artist" name="userType" value="artist" />
              <label htmlFor="artist">Artist</label>

              <input className='w-6 checked:bg-red-500' type="radio" id="listener" name="userType" value="listener" />
              <label htmlFor="listener">Listener</label>
            </div>

            <p className='pr-80' >Email </p>
            <input className='w-96 h-12 p-2 rounded-dm border-white border-2 hover:border-blue-500  focus:border-green-200 bg-black' type="email" name="email" />
            <p className='pr-80'>Password</p>
            <div >
              <input
                className='w-96 h-12 p-2 rounded-dm border-white border-2 hover:border-blue-500 focus:border-green-200 bg-black'
                type={showPassword ? "text" : "password"}
                name='password'
              />

            </div>
            <p className='pr-60'>Confirm Password </p>
            <div >
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

            <button className='bg-red-900 w-96 h-12 mt-12 rounded-dm hover:bg-red-500'> Sing up</button>
            <div className='flex gap-2'>
            <p>Already have an account?  </p> <a href="">sign in</a>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

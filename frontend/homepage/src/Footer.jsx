import React from 'react'

function Footer() {
  return (
    <div className='flex w-screen h-80 bg-black p-12 gap-20' >
        <div className='text-white'>
            <img src="./elements/logo.svg" alt="" />
            <p className='font-thin pl-9'>Music is the art of thinking with sounds.</p>
        </div>
        <div className='flex flex-col gap-4 text-white text-left' >
            <p className='font-bold'>Explore</p>
            <a className='font-thin text-white hover:underline hover:text-white' href="">Artists</a>
            <a  className='font-thin text-white hover:underline hover:text-white'  href="">Most popular release</a>
            <a  className='font-thin text-white hover:underline hover:text-white' href="">New releases</a>
            <a   className='font-thin text-white hover:underline hover:text-white' href="">Playlists</a>
        </div>
        <div className='flex flex-col text-white  gap-12 text-left'>
            <p>Get in touch</p>
            <p className='font-thin'>Remote
we are a 100% remote team <br />use 
out social links to reach us</p>
        </div>
        <div className='text-white flex flex-col h-64 text-left'>
            <p className='font-bold'>Contact us</p>
            <label className='font-light pb-1'htmlFor="">email-adresse</label>
            <input className='rounded text-black p-1' type="email" />
            <label className='font-light h-32 pb-1' htmlFor="">message</label>
            <textarea className='rounded text-black p-1'name="" id="" cols="30" rows="30"></textarea>
            <button className=' bg-blue-500 hover:bg-red-500 text-white font-light rounded  w-24 h-10 place-items-center mt-2 '>
              Submit
            </button>
            <form action=""></form>
            
            
        </div>
    </div>
  )
}

export default Footer
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const contact = () => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text 2xl'>
       Contact
       </h3>
      
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Let's talk</span>
        </h4>

        <div className='flex items-center space-x-5 justify-center'>
       <PhoneIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+27 60 499 2309</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Luyolo201pondo@gmail.com</p>
        </div>
        
        <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Cape Town. 8001</p>
        </div>


      </div>
   </div>
  )
}

export default contact
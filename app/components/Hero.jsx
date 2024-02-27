import React from 'react';
import MeImg from "../Img/IMG-20240119-WA0008.jpg";
import Link from 'next/link';
const Hero = () => {

    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden '>
       <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={MeImg}
       />
     
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-508 pb-2 tracking-[15px]'>
          <span>Hi</span> My name is Luyolo pondo
         
        </h2> 
         <p>I'm a Software Developer</p> 

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>  
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
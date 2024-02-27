'useContent';
import React from 'react';
import { motion} from 'framer-motion';
import Me from "../Img/IMG-20240119-WA0000.jpg";

const About = () => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>

       <img 
       src={Me} 
       alt="" 
       className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
       md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>
       

       <div className='space-y-10 px-0 md:px-10'>
         <h4 className='text-4xl font-semibold '>
            Here is a <span className='underline decoration-[yellow]'>little</span> background
         </h4>
         <p className='text-base'>
            I'm Luyolo A Software Developer with Aspiring Ambition to be A Sofrtware architecture.
            My goal in a company is to set foot and be an example make recommendations because all i believe in is results.
            cal me a Texh Enthusiact, Im in Love with Design Illustration Art for that matter when drives me to make creative
            responsive websites with my Trach stack,I built my websites using Nextjs ,Tailwind css, wich shortened my routes into 
            bieng a Full Stack Software Developer. I'm quite proud of My skills as it shows from my Prevoiuse projects I'vw worked on.
            Hope you find me eligible enough to work in your Enviroment my Friend is Nature.
         </p>
       </div>
    </div>
  )
}

export default About
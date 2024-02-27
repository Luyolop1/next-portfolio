"use client";
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";


const Header = () => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto 
    z-20xl:items-center'>
     <motion.div 
   className='flex flex-row items-center'>
        <SocialIcon url="www.facebook.com" />
        <SocialIcon url="www.instagram.com" />
        <SocialIcon url="www.twitter.com" />
        <SocialIcon url="www.whatsapp.com" />
        <SocialIcon />

      </motion.div>  

      <div className='flex flex-row items-center  cursor-pointer'>
            <p className='uppercase hidden md:inline-flex text-sm'>get in Touch</p>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            url="www.email.com" />
        
                </div> 
    </header>
  )
}

export default Header;
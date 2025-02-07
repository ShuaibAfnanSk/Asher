import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full flex flex-col md:flex-row gap-3 items-center justify-between bg-teal-950 p-5'>
      <p className='text-sm lg:text-[15px] font-medium text-white'>copyright © {new Date().getFullYear()}. Asher | All Rights Reserved</p>
      <div className="flex gap-5 text-white text-[12px]">
        <Link to='/termsandconditions'>Terms & Conditions</Link>
        <Link to='/privacypolicy'>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import orange from "../../assets/loader.png";
import watermelon from "../../assets/lemon.png";

function Footer() {
  return (
    <div className='w-full flex flex-col gap-2 relative overflow-hidden items-center justify-between bg-white p-8'>
      <div className="flex gap-5 text-[12px]">
        <Link to='/termsandconditions'>Terms & Conditions</Link>
        <Link to='/privacypolicy'>Privacy Policy</Link>
      </div>
      <img src={orange} className='w-[100px] h-[100px] object-cover absolute left-[-40px] bottom-[-40px]' alt="" />
      <img src={watermelon} className='w-[100px] h-[100px] object-cover absolute right-[-40px] top-[-40px]' alt="" />
      <p className='text-sm lg:text-[15px] font-medium'>Copyright © {new Date().getFullYear()}. Asher | All Rights Reserved</p>
    </div>
  )
}

export default Footer;
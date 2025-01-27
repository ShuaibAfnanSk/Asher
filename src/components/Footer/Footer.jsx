import React from 'react';

function Footer() {
  return (
    <div className='w-full flex items-center justify-center bg-teal-950 p-5'>
      <p className='text-sm lg:text-[15px] font-medium text-white'>copyright © {new Date().getFullYear()}. Asher | All Rights Reserved</p>
    </div>
  )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import Logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <div className='flex fixed w-full justify-between p-4 bg-teal-950 text-white rounded-b-md z-50'>
      {/* logo */}
      <div className="flex py-2 px-4">
        <h1 className='text-2xl font-semibold logo'>Asher</h1>
        {/* <img src={Logo} alt="Asher" width={100} /> */}
      </div>

      {/* NavItems */}
      <div className="flex items-center py-2 px-4">
        <div className="flex md:hidden">
          <IoMdMenu size={25} />
        </div>
        <nav className='hidden md:flex space-x-8 font-medium text-[20px]'>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/'}>Home</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/about'}>About</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
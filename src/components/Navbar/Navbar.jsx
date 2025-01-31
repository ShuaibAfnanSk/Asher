import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex fixed w-full justify-between p-4 bg-teal-950 text-white rounded-b-md z-50 transition-colors duration-300'>
      {/* logo */}
      <div className="flex py-2 px-4">
        <h1 className='text-2xl font-semibold logo'>Asher</h1>
        {/* <img src={Logo} alt="Asher" width={100} /> */}
      </div>

      {/* NavItems */}
      <div className="flex items-center py-2 px-4">
        <div className="flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <IoMdMenu size={25} />}
        </div>
        <nav className={`fixed flex flex-col items-center justify-start pt-28 md:pt-0 space-y-8 md:flex-row top-0 left-0 w-3/4 h-full bg-teal-950 font-medium text-[20px] transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:flex-row md:space-y-0 md:space-x-8 md:text-[20px] md:translate-x-0`}>
          <Link onClick={() => { setMenuOpen(false); }} to={'/'}>Home</Link>
          <Link onClick={() => { setMenuOpen(false); }} to={'/about'}>About</Link>
          <Link onClick={() => { setMenuOpen(false); }} to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
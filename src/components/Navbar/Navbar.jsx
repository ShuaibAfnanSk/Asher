import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`flex fixed w-full justify-between p-4 z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-black border-b border-b-[rgba(0,0,0,0.1)]' : 'bg-transparent text-white'}`}>
      {/* logo */}
      <div className="flex py-2 px-4">
        <h1 className='text-2xl font-semibold logo'><Link to={'/'}>Asher</Link></h1>
      </div>

      {/* NavItems */}
      <div className="flex items-center py-2 px-4">
        <div className="flex md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <IoMdMenu size={25} />}
        </div>
        <nav className={`fixed flex flex-col items-center justify-start pt-28 md:bg-transparent bg-white ${scrolled ? 'text-black' : 'md:text-white text-black'} md:pt-0 space-y-8 md:flex-row top-0 left-0 w-3/4 h-full text-[16px] transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:flex-row md:space-y-0 md:space-x-8 md:translate-x-0`}>
          <Link onClick={() => { setMenuOpen(false); }} to={'/'}>Home</Link>
          <Link onClick={() => { setMenuOpen(false); }} to={'/about'}>About</Link>
          <Link onClick={() => { setMenuOpen(false); }} to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
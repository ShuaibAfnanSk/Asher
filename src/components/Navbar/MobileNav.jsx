import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav({ isOpen, toggleMenu }) {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <h1 className='text-2xl font-semibold logo'>Asher</h1>
                    {/* <img src={logo} alt="Logo" className="logo" /> */}

                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        {/* <li>
                            <Link to='#' className='menu-item text-gray-700'>BOT Academy</Link>
                        </li> */}
                    </ul>
                    <button className='contact-btnm rounded-full mt-8'>
                        <Link to='/contact'>Contact Us</Link>
                        {/* <a href="/contact">Contact Us</a> */}
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileNav;
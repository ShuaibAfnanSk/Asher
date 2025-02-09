import React, { useEffect } from 'react';
import Contact from '../components/Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaAngleRight } from "react-icons/fa6";
import Navbar from '../components/Navbar/Navbar';
import Juice from '../components/Juice';
import AboutHome from '../components/AboutHome';
import video from "../assets/banner.mp4"
import usp from '../jsons/usp';

function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <>
      <Navbar />
      <section className='home' id='home'>
        <video className="home-banner" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="home-section">
          <div className="home-box">
            <h3 data-aos='fade-up'>Asher - Blessings of Health, Happiness of Nature</h3>
            <p data-aos='fade-up'>What you pray for, nature has already gifted. Embrace the divine blessing of health with every sip.</p>
            <div data-aos='fade-up' className='know-more'>
              <a href="#about">know more <FaAngleRight /></a>
            </div>
          </div>
        </div>
        <div className='home-stamps'>
          {usp.map((u) => (
            <div className='home-stamp'>
              <img src={u.image} alt="" />
              <p>{u.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Juice />
      <AboutHome />
      <Contact />
    </>
  )
}

export default Home;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import aboutImage from '../../assets/images/aboutus.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section className='min-h-[50vh] p-8' id='about'>
      <div className="flex items-center justify-center flex-col mb-5 gap-1">
        <h1 data-aos='fade-up' className='text-5xl md:text-6xl text-teal-950 font-extrabold mono-sans'>About Us</h1>
        <p data-aos='fade-up' className='text-xl font-medium mb-8'>Who are we?</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* content */}
        <div className="flex basis-1/2 flex-col gap-2 mt-0 md:mt-3">
          <p data-aos='fade-up' className='text-teal-950 font-semibold text-xl'>"Rediscover Nature, Rediscover Yourself"</p>
          <p data-aos='fade-up' className='text-gray-800 font-medium'>We wake up every day surrounded by artificial solutions—packaged cereals for breakfast,
            energy drinks for a quick boost, synthetic products promising beauty. Yet, in the rush to
            keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts
            that God has so abundantly provided.</p>
          <p data-aos='fade-up' className='text-gray-800 font-medium'>Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all
            along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers.
            These are life’s true luxuries, crafted by nature’s hand and designed to nurture us</p>
          <p data-aos='fade-up' className='text-gray-800 font-medium'>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away
            from the artificial and embrace the natural. With every sip of our fresh, pure juices, you’re
            not just rewarding yourself—you’re choosing a healthier, stronger, and happier you. You’re giving
            your body the power to heal, protect, and thrive, just as it was meant to.</p>
          <div data-aos='fade-up' className='flex mt-3'>
            <Link to={'/about'} onClick={() => window.scrollTo(0, 0)} className='flex flex-row items-center gap-2 bg-teal-950 px-5 py-2 text-white rounded-full'>Learn more <FaAngleRight /></Link>
          </div>
        </div>
        {/* image */}
        <div data-aos='fade-up' className="flex basis-1/2 justify-center items-center mt-3 md:mt-0">
          <img src={aboutImage} alt="About Us" className='w-[60%]' />
        </div>
      </div>
    </section>

  )
}

export default About;
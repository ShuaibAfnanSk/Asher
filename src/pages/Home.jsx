import React, { useEffect } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Juice from '../components/Juice/Juice';
import { FaAngleRight } from "react-icons/fa6";

function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    // https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6ca2f291522ffd0d37_2.png
    <>
      <section className='flex flex-col justify-between h-[100vh] bg-teal-950' id='home'>
        <div className="flex flex-col lg:flex-row items-center justify-center pt-28">
          <div className="flex w-[90%] md:w-[75%] flex-col items-center justify-center text-white gap-6 p-8">
            <p data-aos='fade-up' className='text-3xl lg:text-6xl text-center font-extrabold'>Asher - Blessings of Health, Happiness of Nature</p>
            <p data-aos='fade-up' className='text-[15px] text-center'>"What you pray for, nature has already gifted. Embrace the divine blessing of health with every sip."</p>
            <div data-aos='fade-up' className='mt-1'>
              <a href="#about" className='flex items-center gap-2 bg-white text-center text-teal-950 font-medium px-4 py-2 rounded-full'>know more <FaAngleRight/> </a>
            </div>
          </div>

          {/* <div data-aos='fade-left' className='flex basis-1/2 justify-center items-center'>
            <img src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af8b39bf98e4cbfe35b6f6_Untitled%20design%20(12)%20(1).png"
              alt="Hero image" className='md:rotate-12 w-[30%] md:w-[23%]' />
          </div> */}
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,106.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>
      <Juice />
      <About />
      <Contact />
    </>
  )
}

export default Home;
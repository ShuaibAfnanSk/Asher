import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Juice({ data }) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='min-h-[50vh] p-8' id='juice'>
            <div className="flex flex-col items-center justify-center p-5 mb-6 gap-1">
                <h1 data-aos='fade-up' className='text-5xl md:text-6xl text-teal-950 font-extrabold mono-sans'>Our Juice</h1>
                <p data-aos='fade-up' className='text-xl font-medium'>Make your Choice</p>
            </div>
            <div className="flex flex-wrap col-span-3 items-center justify-center gap-10 mt-16 md:p-6">
                {data.map((juice, idx) => (
                    <div
                        data-aos='fade-up'
                        key={`juice-${idx}`}
                        className="group relative m-6 my-8 p-4 rounded-full bg-cover bg-center flex items-center justify-center cursor-pointer w-64 h-64"
                        style={{ backgroundColor: `${juice.color}` }}>
                        <div className="fixed top-[-65px] right-2 flex items-center justify-center w-full">
                            <p data-aos='fade-up' className="text-gray-300 uppercase text-[18px] text-center font-bold mono-sans" style={{ color: `${juice.color}` }}>{juice.name}</p>
                        </div>
                        <div className="flex">
                            <div data-aos='fade-up' className='flex'>
                                <Link to={`/product/${juice.id}`}>
                                    <img src={juice.image} alt="images" width={120} className='hover:rotate-6 hover:scale-125 transition-all duration-150 ease-in-out' />
                                </Link>
                            </div>
                            {/* <div data-aos='fade-up' className='fixed top-[70px] left-9'>
                                <img src={juice.sideImg} alt="images" width={110} className='rotate-12 hover:rotate-6 hover:scale-125 transition-all duration-150 ease-in-out' />
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Juice;
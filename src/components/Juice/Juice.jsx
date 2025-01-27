import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const juices = [
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6133ce62c932cf59e0_6.png',
        title: 'Pineapple Green Refresh',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pine-apple.png',
        color: '#dfa909'
    },
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c68df5e94bdf6d8d08d_1.png',
        title: 'Watermelon Bliss',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/watermelon.png',
        color: '#e6150f'
    },
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6ca2f291522ffd0d37_2.png',
        title: 'Ginger Shots',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png',
        color: '#bc8d03'
    },
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af8b39bf98e4cbfe35b6f6_Untitled%20design%20(12)%20(1).png',
        title: 'GrapeBerry Delight',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/grapes.png',
        color: '#b14eff'
    },
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c97372d85d43ff3c13f_1%20(1).png',
        title: 'Orange Glow',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/orange.png',
        color: '#ff994d'
    },
    {
        image: 'https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6fd0a17b480f1da3bb_3.png',
        title: 'ABC Power Punch',
        sideImg: 'https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/apple.png',
        color: '#f861a1'
    }
];

function Juice() {
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
                {juices.map((juice, idx) => (
                    <div
                        data-aos='fade-up'
                        key={`juice-${idx}`}
                        className="group relative m-4 p-4 rounded-full bg-cover bg-center flex items-end cursor-pointer w-72 h-72"
                        style={{ backgroundColor: `${juice.color}` }}>
                        <div className="fixed top-[-60px] right-2 flex w-full p-2">
                            <p data-aos='fade-up' className="text-gray-300 uppercase text-[18px] font-bold mono-sans" style={{color: `${juice.color}`}}>{juice.title}</p>
                        </div>
                        <div className="flex">
                            <div data-aos='fade-up' className='fixed top-[-35px] right-2'>
                                <img src={juice.image} alt="images" width={110} className='rotate-12 hover:rotate-6 hover:scale-125 transition-all duration-150 ease-in-out' />
                            </div>
                            <div data-aos='fade-up' className='fixed top-[70px] left-4'>
                                <img src={juice.sideImg} alt="images" width={110} className='rotate-12 hover:rotate-6 hover:scale-125 transition-all duration-150 ease-in-out' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Juice;
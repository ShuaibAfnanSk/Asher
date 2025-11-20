import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Choose = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className='min-h-[100vh] relative w-full overflow-hidden'>
            <img className='absolute object-cover w-full h-full' data-aos='fade-up' src='https://ik.imagekit.io/akiAfnan/Asher/tangeriene.jpg?tr=w-1400,h-700,f-auto,q-auto,fo-auto' alt='' />
            <div className='absolute w-full h-full flex px-8 justify-end items-center'>
                <div data-aos='fade-left' className="flex flex-col gap-4 sm:gap-8 w-full sm:w-[500px] bg-white p-8 rounded-md">
                    <h3 className='uppercase font-bold text-2xl sm:text-4xl'>Why Choose Asher?</h3>
                    <h5 className='text-lg sm:text-2xl'>India's First 100% Organic and Health-Conscious Juice Brand</h5>
                    <p className='text-sm text-[rgba(0,0,0,0.75)] sm:text-base'>At Asher - Reward Yourself, we’re proud to be India’s first brand that focuses on creating 100% organic, preservative-free, and health-conscious juices. Our goal is to not only deliver the best-tasting beverages but also to educate and empower our customers about making healthier lifestyle choices.</p>
                </div>
            </div>
        </section>
    );
}

export default Choose;
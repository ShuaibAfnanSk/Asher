import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import apple from '../../assets/apple.jpg';
import rasp from '../../assets/rasp.jpg';
import open from '../../assets/open.jpg';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className='polo-wrapper'>
            <div className='ageTitle'>
                <h3 data-aos='fade-up'>Join us</h3>
                <p data-aos='fade-up'>Be a part of Asher Community</p>
            </div>
            <div className='polo-container'>
                <div className='polo-right'>
                    <div className='polo-box'>
                        <p data-aos='fade-up'>Be part of the Asher movement where health meets purity! Choose 100% organic, preservative-free juices crafted for your well-being. Join us in embracing nature’s finest, raising awareness about real nutrition, and building a healthier future. Reward yourself with the gift of wellness. Join Asher today!</p>
                        <div data-aos='fade-up' className='know-more-dark'>
                            <a href="/contact">contact us <FaAngleRight /></a>
                        </div>
                    </div>
                </div>
                <div className='polo-imgs'>
                    <div className='polos'>
                        <img data-aos='fade-up' src={apple} alt="" />
                        <img data-aos='fade-up' src={rasp} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
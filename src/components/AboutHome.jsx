import svg from "../assets/drink-svg.png";
import banner from "../assets/mocktail.jpg"
import { Link } from "react-router-dom";
import products from "../jsons/products";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutHome = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="ah-section" id="about">
            <div className="ageTitle">
                <h3 data-aos='fade-up'>About Us</h3>
                <p data-aos='fade-up'>Know our motivation and origin</p>
            </div>
            <div className="ah-wrapper">
                <div className="ah-img">
                    <div className="ah-banner">
                        <img data-aos='fade-up' src={banner} className="ah-polo" alt="" />
                        <img data-aos='fade-up' src={products[1].details[0].image} className="ah-fruit" alt="" />
                    </div>
                </div>
                <div className="ah-container">
                    <div className="ah-content">
                        <div data-aos='fade-up' className="ah-box">
                            <img src={svg} alt="" />
                            <p>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away from the artificial and embrace the natural. </p>
                        </div>
                        <div data-aos='fade-up' className="ah-box">
                            <img src={svg} alt="" />
                            <p>With every sip of our fresh, pure juices, you’re not just rewarding yourself—you’re choosing a healthier, stronger, and happier you.</p>
                        </div>
                        <Link className="click" to={'/about'}><button>Know more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHome;
import tangeriene from '../../assets/tangeriene.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Choose = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="about-choose" style={{overflow:"hidden"}}>
            <img data-aos='fade-up' src={tangeriene} alt="" />
            <div className="choose-box">
                <div data-aos='fade-left' className="choose-stamp">
                    <h3>Why Choose Asher?</h3>
                    <h5>India's First 100% Organic and Health-Conscious Juice Brand</h5>
                    <p>At Asher - Reward Yourself, we’re proud to be India’s first brand that focuses on creating 100% organic, preservative-free, and health-conscious juices. Our goal is to not only deliver the best-tasting beverages but also to educate and empower our customers about making healthier lifestyle choices.</p>
                </div>
            </div>
        </section>
    );
}

export default Choose;
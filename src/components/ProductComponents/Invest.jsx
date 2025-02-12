import invest from '../../assets/cocktail.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import fruits from "../../assets/fruits.png"

const Invest = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (

        <div className="join-wrapper" style={{ overflow: "hidden" }}>
            <div className="ageTitle">
                <h3 data-aos='fade-up'>Join the Asher Movement</h3>
                <p data-aos='fade-up'>Choose Asher - Reward Yourself and experience the difference</p>
            </div>
            <div className="join-container">
                <div className="join-left">
                    <div className="join-img">
                        <img data-aos='fade-up' className='joiner' src={invest} alt="" />
                        <div className='join-fade' data-aos="fade-left">
                            <p>So go ahead reward yourself with the purity of nature and the promise of health. At Asher, we don’t compromise on your well-being.</p>
                            <img src={fruits} alt="" />
                        </div>
                    </div>
                </div>
                <div className="join-box">
                    <div data-aos='fade-up' className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>100% organic, preservative-free, and health-conscious beverages.</p>
                    </div>
                    <div data-aos='fade-up' className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>Products crafted with love, care, and nature’s finest ingredients.</p>
                    </div>
                    <div data-aos='fade-up' className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>A commitment to educating and empowering you for better health choices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invest;
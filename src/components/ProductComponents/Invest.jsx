import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

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
                        <img data-aos='fade-up' className='joiner' src="https://ik.imagekit.io/akiAfnan/Asher/cocktail.jpg?tr=w-500,h-500,f-auto,q-auto,fo-auto" alt="" />
                        <img data-aos='fade-right' className='kiwi' src="https://ik.imagekit.io/akiAfnan/Asher/kiwi.jpg?tr=w-250,h-250,f-auto,q-auto,fo-auto" alt="" />
                    </div>
                </div>
                <div data-aos='fade-up' className="join-box">
                    <div className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>100% organic, preservative-free, and health-conscious beverages.</p>
                    </div>
                    <div className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>Products crafted with love, care, and nature’s finest ingredients.</p>
                    </div>
                    <div className="join-stamp">
                        <i class="ph ph-checks"></i>
                        <p>A commitment to educating and empowering you for better health choices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invest;
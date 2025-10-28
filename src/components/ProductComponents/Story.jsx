import invest from "../../jsons/invest";
import vision from "../../jsons/vision";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Story = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="about-story" style={{overflow: "hidden"}}>
            <div className="about-hero">
                <video className="about-banner" autoPlay loop muted playsInline>
                    <source src="https://ik.imagekit.io/akiAfnan/Asher/about.mp4" type="video/mp4" />
                </video>
                <div className='about-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fafafa" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,106.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <h4 data-aos='fade-up'>Rediscover Nature, Rediscover Yourself</h4>
            </div>
            <div className="story-container">
                <div className="story-box">
                    <div className="story-content">
                        <p data-aos='fade-up'>In the rush to keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts that God has so abundantly provided.</p>
                        <p data-aos='fade-up'>Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers. These are life’s true luxuries, crafted by nature’s hand and designed to nurture us.</p>
                    </div>
                    <div className="story-img">
                        <img data-aos='fade-up' className="img-block" src="https://ik.imagekit.io/akiAfnan/Asher/orange.jpg?tr=w-600,h-600,f-auto,q-auto,fo-auto" alt="" />
                        <div data-aos='fade-right' className="story-stamp end"><img src="https://ik.imagekit.io/akiAfnan/Asher/apple.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" alt="" /><p>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away from the artificial and embrace the natural.</p></div>
                    </div>
                </div>
                <div className="story-box">
                    <div className="story-img">
                        <img data-aos='fade-up' className="img-block" src="https://ik.imagekit.io/akiAfnan/Asher/fruits.jpg?tr=w-600,h-600,f-auto,q-auto,fo-auto" alt="" />
                        <div data-aos='fade-left' className="story-stamp start"><img src="https://ik.imagekit.io/akiAfnan/Asher/ginger.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" alt="" /><p>Life is a blessing, and so is nature. Let’s honor both by making better choices not just for today, but for every day to come.</p></div>
                    </div>
                    <div className="story-content">
                        <p data-aos='fade-up'>We wake up every day surrounded by artificial solutions packaged cereals for breakfast, energy drinks for a quick boost, synthetic products promising beauty.</p>
                        <p data-aos='fade-up'>With every sip of our fresh, pure juices, you’re not just rewarding yourself you’re choosing a healthier, stronger, and happier you. You’re giving your body the power to heal, protect, and thrive, just as it was meant to.</p>
                    </div>
                </div>
            </div>
            <div className="about-reward">
                <div className="ageTitle">
                    <h3 data-aos='fade-up'>Mission & Vision</h3>
                    <p data-aos='fade-up'>Reward yourself. Embrace the blessings of nature. Choose Asher.</p>
                </div>
                <div className="reward-boxes">
                    {vision.map((v) => (
                        <div data-aos='fade-up' className="reward-box">
                            <h5>{v.name}</h5>
                            <div className="reward-box-img">
                                <img src={v.image} alt="" />
                            </div>
                            <p>{v.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="faq-section about-faq">
                <div className="ageTitle">
                    <h3 data-aos='fade-up'>What You’re Investing In</h3>
                    <p data-aos='fade-up'>When you choose Asher, you’re not just buying a juice. You’re investing in:</p>
                </div>
                <div className="faq-tail">
                    {invest.map((i, id) => (
                        <div key={id} className="faq-box">
                            <div data-aos='fade-up' className="faq-block cred-block"><p>{i.name}</p><img src={i.image} alt="" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Story;
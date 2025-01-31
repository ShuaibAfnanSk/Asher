import invest from "../../jsons/invest";
import products from "../../jsons/products";
import vision from "../../jsons/vision";
import fruits from "../../assets/fruits.jpg";
import orange from "../../assets/orange.jpg";
import coconut from "../../assets/coconut.jpg";

const Story = () => {

    return (
        <section className="about-story">
            <div className="about-hero">
                <img src={fruits} className="about-banner" alt="" />
                <h4>Rediscover Nature, Rediscover Yourself</h4>
            </div>
            <div className="story-container">
                <div className="story-box">
                    <div className="story-content">
                        <p>In the rush to keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts that God has so abundantly provided.</p>
                        <p>Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers. These are life’s true luxuries, crafted by nature’s hand and designed to nurture us.</p>
                    </div>
                    <div className="story-img">
                        <img className="img-block" src={orange} alt="" />
                        <div className="story-stamp end"><img src={products[0].details[0].image} alt="" /><p>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away from the artificial and embrace the natural.</p></div>
                    </div>
                </div>
                <div className="story-box">
                    <div className="story-img">
                        <img className="img-block" src={coconut} alt="" />
                        <div className="story-stamp start"><img src={products[5].details[0].image} alt="" /><p>Life is a blessing, and so is nature. Let’s honor both by making better choices not just for today, but for every day to come.</p></div>
                    </div>
                    <div className="story-content">
                        <p>We wake up every day surrounded by artificial solutions packaged cereals for breakfast, energy drinks for a quick boost, synthetic products promising beauty.</p>
                        <p>With every sip of our fresh, pure juices, you’re not just rewarding yourself you’re choosing a healthier, stronger, and happier you. You’re giving your body the power to heal, protect, and thrive, just as it was meant to.</p>
                    </div>
                </div>
            </div>
            <div className="about-reward">
                <div className="ageTitle">
                    <h3>Mission & Vision</h3>
                    <p>Reward yourself. Embrace the blessings of nature. Choose Asher.</p>
                </div>
                <div className="reward-boxes">
                    {vision.map((v) => (
                        <div className="reward-box">
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
                    <h3>What You’re Investing In</h3>
                    <p>When you choose Asher, you’re not just buying a juice. You’re investing in:</p>
                </div>
                <div className="faq-tail">
                    {invest.map((i, id) => (
                        <div key={id} className="faq-box">
                            <div className="faq-block cred-block"><p>{i.name}</p><img src={i.image} alt="" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Story;
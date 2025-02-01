import svg from "../assets/drink-svg.png";
import banner from "../assets/mocktail.jpg"
import { Link } from "react-router-dom";
import products from "../jsons/products";

const AboutHome = () => {
    return (
        <section className="ah-wrapper">
            <div className="ah-img">
                <div className="ah-banner">
                    <img src={banner} className="ah-polo" alt="" />
                    <img src={products[4].details[0].image} className="ah-fruit" alt="" />
                </div>
            </div>
            <div className="ah-container">
                <div className="ah-content">
                    <h4>About Asher</h4>
                    <div className="ah-box">
                        <img src={svg} alt="" />
                        <p>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away from the artificial and embrace the natural. </p>
                    </div>
                    <div className="ah-box">
                        <img src={svg} alt="" />
                        <p>With every sip of our fresh, pure juices, you’re not just rewarding yourself—you’re choosing a healthier, stronger, and happier you.</p>
                    </div>
                    <Link className="click" to={'/about'}><button>Know More</button></Link>
                </div>
            </div>
        </section>
    );
}

export default AboutHome;
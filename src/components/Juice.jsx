import banner from "../assets/wavy.png"
import { Link } from "react-router-dom";
import products from "../jsons/products";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Juice = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section className="juice-wrapper">
            <div className="ageTitle">
                <h3 data-aos='fade-up'>Our Juice</h3>
                <p data-aos='fade-up'>Make your choice</p>
            </div>
            <div className="juice-container">
                {products.map((product) => (
                    <div data-aos='fade-up' className="juice-card">
                        <Link className="juice-img" to={`product/${product.id}`} style={{ backgroundColor: product.color }}>
                            <img src={banner} className="wavy" alt="" />
                            <img src={product.image} className="juice-can" alt="" />
                            <img src={product.details[0].image} className="juice-fruit" alt="" />
                            <div className="juice-content">
                                <h4>{product.name}</h4>
                                <img src={product.details[0].image} alt="" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Juice;
import { Link } from "react-router-dom";
import products from "../jsons/products";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Juice = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="juice-wrapper">
            <div className="ageTitle">
                <h3 data-aos='fade-up'>Our Juices</h3>
                <p data-aos='fade-up'>Make your choice</p>
                <div className="fruits-images" data-aos='fade-up'>
                    <img src="https://ik.imagekit.io/akiAfnan/Asher/coconut.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" alt="" />
                    <img src="https://ik.imagekit.io/akiAfnan/Asher/lemon.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" alt="" />
                    <img src="https://ik.imagekit.io/akiAfnan/Asher/pine-apple.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" alt="" />
                </div>
            </div>
            <div className="juice-container">
                {products.map((product) => (
                    <div data-aos='fade-up' className="juice-card">
                        <Link className="juice-img" to={`product/${product.id}`} style={{ backgroundColor: product.color }}>
                            <img src="https://ik.imagekit.io/akiAfnan/Asher/wavy.png?tr=w-500,h-500,f-auto,q-auto,fo-auto" className="wavy" alt="" />
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
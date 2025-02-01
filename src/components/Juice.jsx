import banner from "../assets/wavy.png"
import { Link } from "react-router-dom";
import products from "../jsons/products";

const Juice = () => {
    return (
        <section className="juice-wrapper">
            <div className="ageTitle">
                <h3>Our Juice</h3>
                <p>Make your choice</p>
            </div>
            <div className="juice-container">
                {products.map((product) => (
                    <div className="juice-card">
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
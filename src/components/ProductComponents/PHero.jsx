import { useEffect, useState } from "react";
import usp from "../../jsons/usp";
import NavbarProduct from "../Navbar/NavbarProduct";
import Aos from "aos";

const PHero = ({ product }) => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <>
            <NavbarProduct />
            <section className="product-hero" style={{ backgroundColor: product.color }}>
                <img src="https://ik.imagekit.io/akiAfnan/Asher/wavy.png?tr=w-1400,h-700,f-auto,q-auto,fo-auto" className="wave-pattern" alt="" />
                <img className="product-img" src={product.image} alt="" />
                <div className="product-fruit">
                    <img src={product.details[0].image} alt="" />
                    <img src={product.details[0].image} alt="" />
                </div>
                <h3 className="product-name">{product.fruit}</h3>
                <div data-aos='fade-right' className="product-title" style={{ '--circle': product.color }}>
                    <h4 style={{ color: product.color }}><i className="ph ph-brandy"></i> - {product.name}</h4>
                    <p className="product-taste">"{product.taste}"</p>
                    <div className="product-stamps">
                        {usp.slice(1, 4).map((u, id) => (
                            <div key={id} className="product-stamp">
                                <img src={u.image} alt="" />
                                <p>{u.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img className="popup-fruit" src={product.details[0].image} alt="" />
                        <img src={product.image} className="popup-drink" alt="" />
                        <h4>Welcome to Asher Drinks</h4>
                        <p>Thanks for buying Asher Drink <span style={{ color: product.color, textDecoration: "underline" }}>{product.name}</span>, You have successfully unlocked your rewards.</p>
                        <button onClick={closePopup} style={{ backgroundColor: product.color }}><i className="ph ph-x"></i></button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PHero;
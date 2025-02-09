import { useEffect, useState } from "react";
import wavy from "../../assets/wavy.png";
import usp from "../../jsons/usp";
import NavbarProduct from "../Navbar/NavbarProduct";

const PHero = ({ product }) => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <NavbarProduct />
            <section className="product-hero" style={{ backgroundColor: product.color }}>
                <img src={wavy} className="wavy" alt="" />
                <img className="product-img" src={product.image} alt="" />
                <div className="product-fruit">
                    <img src={product.details[0].image} alt="" />
                    <img src={product.details[0].image} alt="" />
                </div>
                <h3 className="product-name">{product.fruit}</h3>
                <div className="product-title" style={{ '--circle': product.color }}>
                    <h4 style={{ color: product.color }}><i className="ph ph-brandy"></i> - {product.name}</h4>
                    <p>"{product.tagline}"</p>
                    <div className="product-stamps">
                        {usp.slice(1, 4).map((u) => (
                            <div className="product-stamp">
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
                        <p>Thanks for buying Asher Drink <span style={{color: product.color, textDecoration: "underline"}}>{product.name}</span>, You have successfully unlocked your rewards.</p>
                        <button onClick={closePopup} style={{backgroundColor: product.color}}><i className="ph ph-x"></i></button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PHero;
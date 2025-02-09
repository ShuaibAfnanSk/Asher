import { useState } from "react";
import Marquee from "./Marquee";

const Ingredients = ({ product }) => {

    const [flippedStates, setFlippedStates] = useState({});

    const handleFlip = (ingredientId) => {
        setFlippedStates(prev => ({
            ...prev,
            [ingredientId]: !prev[ingredientId]
        }));
    };

    return (
        <section style={{ backgroundColor: product.color }} id="ingredients" className="ingredient-section">
            <Marquee product={product} />
            <div className="ingredient-wrapper">
                <div className="ingredient-container">
                    {product.details.map((d) => (
                        <div className={`ingredient ${flippedStates[d.ingredient] ? "flipped" : ""}`}>
                            <div className="ingredient-front">
                                <img src={d.image} alt="" />
                                <h4>{d.ingredient}</h4>
                                <div className="ingredient-stamp">
                                    <p>{d.nutrients}</p>
                                    <button style={{ color: product.color }} onClick={() => handleFlip(d.ingredient)}>See Benefits</button>
                                </div>
                            </div>
                            <div className="ingredient-back">
                                <div className="benefits">
                                    {d.benefits.map((b, id) => (
                                        <div key={id} className="benefit">
                                            <span></span>
                                            <p>{b}</p>
                                        </div>
                                    ))}
                                </div>
                                <button className="rotate-back" style={{ color: product.color }} onClick={() => handleFlip(d.ingredient)}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Ingredients;
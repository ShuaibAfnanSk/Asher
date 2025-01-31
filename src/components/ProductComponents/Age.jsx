import { useState } from "react";
import styled from "styled-components";
import Faq from "./Faq";
import Credibility from "./Credibility";
import Expert from "./Expert";


const LanguageBox = styled.div`
    transform: translatex(${props => props.swiper * -350}px);
    transition: all .3s ease-in;
`

const AgeCriteria = ({ product }) => {

    const [swiper, setSwiper] = useState(0);

    const handleChange = (direction) => {
        if (direction == "left") {
            setSwiper(swiper > 0 ? swiper - 1 : product.ageCriteria.length - 1)
        }
        else {
            setSwiper(swiper < product.ageCriteria.length - 1 ? swiper + 1 : 0)
        }
    }

    return (
        <section className="ageWrapper">
            <div className="ageTitle">
                <h3>Age Criteria</h3>
                <p>Know the Age Criteria for Consumption</p>
            </div>
            <div className="ageContent">
                <div className="ageBtns">
                    <div className="ageBtn" onClick={() => handleChange("left")}><i style={{ color: product.color }} class="ph ph-caret-left"></i></div>
                    <div className="ageBtn" onClick={() => handleChange("right")}><i style={{ color: product.color }} class="ph ph-caret-right"></i></div>
                </div>
                <LanguageBox className="ageSwiper" swiper={swiper}>
                    {product.ageCriteria.map((a) => (
                        <div className="age">
                        
                                <div className="ageStamp">
                                    <h6>{a.ageGroup}</h6>
                                    <h4>Serving: {a.recommendedServing}</h4>
                                </div>
                                <p>{a.benefits ?? a.notes}</p>
                            </div>
               
                    ))}
                </LanguageBox>
            </div>
            <Faq product={product} />
            <Credibility product={product} />
            <Expert product={product} />
        </section>
    );
}

export default AgeCriteria;
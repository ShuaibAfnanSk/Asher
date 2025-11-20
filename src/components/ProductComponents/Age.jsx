import { useState } from "react";
import styled from "styled-components";
import Faq from "./Faq";
import Credibility from "./Credibility";
import Expert from "./Expert";
import SectionHeader from "../SectionHeader";

const LanguageBox = styled.div`
  transform: translatex(${(props) => props.swiper * -340}px);
  transition: all 0.3s ease-in;
`;

const AgeCriteria = ({ product }) => {
  const [swiper, setSwiper] = useState(0);

  const handleChange = (direction) => {
    if (direction == "left") {
      setSwiper(swiper > 0 ? swiper - 1 : product.ageCriteria.length - 1);
    } else {
      setSwiper(swiper < product.ageCriteria.length - 1 ? swiper + 1 : 0);
    }
  };

  return (
    <section id="age" className="ageWrapper">
      <SectionHeader title={"Age Criteria"} description={"Know the Age Criteria for Consumption"} />
      <div className="ageContent">
        <div className="ageBtns">
          <div className="ageBtn" onClick={() => handleChange("left")}>
            <i style={{ color: product.color }} className="ph ph-caret-left"></i>
          </div>
          <div className="ageBtn" onClick={() => handleChange("right")}>
            <i style={{ color: product.color }} className="ph ph-caret-right"></i>
          </div>
        </div>
        <LanguageBox className="ageSwiper" swiper={swiper}>
          {product.ageCriteria.map((a, id) => (
            <div key={id} className="age">
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
};

export default AgeCriteria;

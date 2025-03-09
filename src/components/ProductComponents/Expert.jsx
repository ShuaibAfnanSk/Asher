import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Expert = ({ product }) => {

      useEffect(() => {
        Aos.init({ duration: 1000 })
      }, []);

    return (
        <div className="expert-wrapper">
            <img data-aos='fade-bottom' src={product.details[0].image} alt="" />
            <div className="expert-quote">
                <p data-aos='fade-up'>"{product.expertQuote.quote}"</p>
            </div>
            <div className="expert-details">
                <h4 data-aos='fade-up'>{product.expertQuote.name}</h4>
                <p data-aos='fade-up'>{product.expertQuote.designation}</p>
            </div>
        </div>
    );
}

export default Expert;
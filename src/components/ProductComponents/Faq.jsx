import Aos from "aos";
import { useEffect, useState } from "react";

const Faq = ({ product }) => {

    const [show, setShow] = useState(0);

    const handleShow = (id) => {
        setShow((prev) => (prev === id ? null : id))
    }

     useEffect(() => {
            Aos.init({ duration: 1000 })
        }, []);

    return (
        <section id='faq' className="faq-section">
            <div className="ageTitle">
                <h3>Faq's</h3>
                <p>Frequently Asked Questions</p>
            </div>
            <div className="faq-tail">
                {product.faqs.map((f, id) => (
                    <div key={id} data-aos='fade-up' className="faq-box">
                        <div className="faq-block" onClick={() => handleShow(id)}>
                            <h4>{f.question}</h4>
                            {show === id && (<img className="faq-fruit" src={product.details[0].image} alt="" /> )}
                            {show === id && (
                                <div className="faq-text">
                                    <p>"{f.answer}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;
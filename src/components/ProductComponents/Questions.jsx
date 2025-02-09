import Aos from "aos";
import { useEffect, useState } from "react";

const Questions = ({ product, heading, image }) => {

    const [show, setShow] = useState(0);

    const handleShow = (id) => {
        setShow((prev) => (prev === id ? null : id))
    }

     useEffect(() => {
            Aos.init({ duration: 1000 })
        }, []);

    return (
        <section className="question-wrapper">
            <div className="question-left" data-aos="fade-right">
                <img className="" src={image} alt="" />
            </div>
            <div className="question-right" data-aos="fade-left">
                <h3>{heading}</h3>
                <div className="question-box">
                    {product.map((f, id) => (
                        <div key={id} className="question" onClick={() => handleShow(id)}>
                            <h4>{f.question}</h4>
                            {show === id && (
                                <div className="">
                                    <p>"{f.answer}"</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Questions;
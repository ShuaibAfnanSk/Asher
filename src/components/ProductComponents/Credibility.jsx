import Aos from 'aos';
import source from '../../assets/source.png';
import { useEffect } from 'react';

const Credibility = ({ product }) => {

     useEffect(() => {
            Aos.init({ duration: 1000 })
        }, []);

    return (
        <section className="faq-section">
            <div className="ageTitle">
                <h3>Credibility</h3>
                <p>The Info provided is as sourced by below institutes</p>
            </div>
            <div className="faq-tail">
                {product.sourceCredibility.map((f, id) => (
                    <div data-aos='fade-up' key={id} className="faq-box">
                        <div className="faq-block cred-block"><p>{f}</p><img src={source} alt="" /></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Credibility;
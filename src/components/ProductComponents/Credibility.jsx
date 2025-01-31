import source from '../../assets/source.png';

const Credibility = ({ product }) => {

    return (
        <section className="faq-section">
            <div className="ageTitle">
                <h3>Credibility</h3>
                <p>The Info provided is as sourced by below institutes</p>
            </div>
            <div className="faq-tail">
                {product.sourceCredibility.map((f, id) => (
                    <div key={id} className="faq-box">
                        <div className="faq-block cred-block"><p>{f}</p><img src={source} alt="" /></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Credibility;
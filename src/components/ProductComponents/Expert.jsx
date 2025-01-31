const Expert = ({ product }) => {
    return (
        <div className="expert-wrapper">
            <img src={product.details[0].image} alt="" />
            <div className="expert-quote">
                <p>"{product.expertQuote.quote}"</p>
            </div>
            <div className="expert-details">
                <h4>{product.expertQuote.name}</h4>
                <p>{product.expertQuote.designation}</p>
            </div>
        </div>
    );
}

export default Expert;
const Cards = ({product, heading, tagline, image}) => {
    return (
        <div className="box-wrapper">
            <div className="reaction-title">
                <h3>{heading}</h3>
                <p>{tagline}</p>
            </div>
            <div className="reactions">
                {product.map((r, id) => (
                    <div key={id} className="reaction">
                        <h4>{r.duration}</h4>
                        <p>{r.benefits}</p>
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
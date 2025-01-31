import { Link } from "react-router-dom";

const Flavour = ({ data }) => {

    const handlechange = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    return (
        <div className="flavour-wrapper">
            <div className="ageTitle flavourTitle">
                <h3>More Flavours</h3>
                <p>Here are more products from Asher</p>
            </div>
            <div className="flavours">
                {data.map((d, key) => (
                    <Link to={`/product/${d.id}`} onClick={handlechange} key={key}><div className="flavour">
                        <img src={d.image} alt="" />
                    </div></Link>
                ))}
            </div>
        </div>
    );
}

export default Flavour;
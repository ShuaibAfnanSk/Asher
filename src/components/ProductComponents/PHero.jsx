import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import wavy from "../../assets/wavy.png";

const PHero = ({product}) => {

    return (
        <section className="product-hero" style={{backgroundColor: product.color}}>
            <img src={wavy} className="wavy" alt="" />
            <Link to={'/'} className="button"><button><IoChevronBackOutline size={23} className="icon" style={{backgroundColor: product.color}} /><p>Go Back</p></button></Link>
            <img className="product-img" src={product.image} alt="" />
            <div className="product-fruit">
                <img src={product.details[0].image} alt="" />
                <img src={product.details[0].image} alt="" />
            </div>
            <h3 className="product-name">{product.fruit}</h3>
            <div className="product-title" style={{'--circle': product.color}}>
                <h4 style={{color: product.color}}><i className="ph ph-brandy"></i> - {product.name}</h4>
                <p>"{product.tagline}"</p>
            </div>
        </section>
    );
}

export default PHero;
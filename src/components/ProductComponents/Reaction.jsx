import Cards from "./Cards";
import body from "../../assets/body.png";
import clock from "../../assets/clock.png";

const Reaction = ({product}) => {

    return (
        <section className="reaction-wrapper">
            <div className="reaction-container">
                <div className="reaction-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="reaction-box">
                    <Cards product={product.bodyReaction} heading={"Body Reaction"} tagline={"Know the changes which occur in your body after consumption"} image={body} />
                    <Cards product={product.timings} heading={"Timings"} tagline={"Know the perfect times for consumption"} image={clock} />
                </div>
            </div>
        </section>
    );
}

export default Reaction;
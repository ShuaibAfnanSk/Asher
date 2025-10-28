import Cards from "./Cards";

const Reaction = ({ product }) => {

    return (
        <section id="reaction" className="reaction-wrapper">
            <div className="reaction-container">
                <div className="reaction-img">
                    <div className="img-box">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="reaction-box">
                    <Cards product={product.bodyReaction} heading={"Body Reaction"} tagline={"Know the changes which occur in your body after consumption"} image="https://ik.imagekit.io/akiAfnan/Asher/body.png?tr=w-75,h-75,f-auto,q-auto,fo-auto" />
                    <Cards product={product.timings} heading={"Timings"} tagline={"Know the perfect times for consumption"} image="https://ik.imagekit.io/akiAfnan/Asher/clock.png?tr=w-75,h-75,f-auto,q-auto,fo-auto" />
                </div>
            </div>
        </section>
    );
}

export default Reaction;
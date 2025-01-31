import Questions from "./Questions";
import body from "../../assets/body.png";
import other from "../../assets/other.jpg";

const Quote = ({ product }) => {
    return (
        <section className="wrapper">
            <Questions product={product.gymQuestions} heading={"Gym Related Question"} image={body} />
            <Questions product={product.otherQuestions} heading={"Other Questions"} image={other} />
        </section>
    );
}

export default Quote;
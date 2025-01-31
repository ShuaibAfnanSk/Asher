import Questions from "./Questions";
import gym from "../../assets/gym.jpg";
import other from "../../assets/other.jpg";

const Quote = ({ product }) => {
    return (
        <section className="wrapper">
            <Questions product={product.gymQuestions} heading={"Gym Related Question"} image={gym} />
            <Questions product={product.otherQuestions} heading={"Other Questions"} image={other} />
        </section>
    );
}

export default Quote;
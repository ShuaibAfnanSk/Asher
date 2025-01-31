import Questions from "./Questions";

const Quote = ({ product }) => {
    return (
        <section className="wrapper">
            <Questions product={product.gymQuestions} heading={"Gym Related Question"} image={"/src/assets/gym.jpg"} />
            <Questions product={product.otherQuestions} heading={"Other Questions"} image={"/src/assets/other.jpg"} />
        </section>
    );
}

export default Quote;
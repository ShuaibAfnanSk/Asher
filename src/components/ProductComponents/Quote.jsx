import Questions from "./Questions";

const Quote = ({ product }) => {
    return (
        <section id='questions' className="wrapper">
            <Questions product={product.gymQuestions} heading={"Gym Related Question"} image="https://ik.imagekit.io/akiAfnan/Asher/gym.jpg?tr=w-500,h-600,f-auto,q-auto,fo-auto" />
            <Questions product={product.otherQuestions} heading={"Other Questions"} image="https://ik.imagekit.io/akiAfnan/Asher/other.jpg?tr=w-500,h-600,f-auto,q-auto,fo-auto" />
        </section>
    );
}

export default Quote;
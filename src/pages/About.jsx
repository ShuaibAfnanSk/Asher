import Navbar from "../components/Navbar/Navbar";
import Choose from "../components/ProductComponents/Choose";
import Invest from "../components/ProductComponents/Invest";
import Make from "../components/ProductComponents/Make";
import Story from "../components/ProductComponents/Story";

const About = () => {
    return (
        <>
            <Navbar />
            <main className="about">
                <Story />
                <Choose />
                <Make />
                <Invest />
            </main>
        </>
    );
}

export default About;
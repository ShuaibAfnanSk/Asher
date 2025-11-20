import Choose from "../components/AboutComponents/Choose";
import Invest from "../components/AboutComponents/Invest";
import Make from "../components/AboutComponents/Make";
import Story from "../components/AboutComponents/Story";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <main className="flex flex-col w-full gap-20 mb-[5rem]">
                <Story />
                <Choose />
                <Make />
                <Invest />
            </main>
        </>
    );
}

export default About;
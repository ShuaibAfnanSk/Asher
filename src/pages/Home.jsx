import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Juice from "../components/HomeComponents/Juice";
import AboutHome from "../components/HomeComponents/AboutHome";
import Hero from "../components/HomeComponents/Hero";
import Join from "../components/HomeComponents/Join";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-16 pb-16">
        <Hero />
        <Juice />
        <AboutHome />
        <Join />
      </div>
    </>
  );
}

export default Home;

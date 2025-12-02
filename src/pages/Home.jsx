import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Juice from "../components/HomeComponents/Juice";
import AboutHome from "../components/HomeComponents/AboutHome";
import Hero from "../components/HomeComponents/Hero";
import Join from "../components/HomeComponents/Join";
import Usp from "../components/HomeComponents/Usp";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="sticky-img flex flex-col items-center">
        <Usp />
        <Juice />
        <AboutHome />
        <Join />
      </div>
    </>
  );
}

export default Home;

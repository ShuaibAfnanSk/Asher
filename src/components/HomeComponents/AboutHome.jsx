import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../SectionHeader";
import { FaAngleRight } from "react-icons/fa";

const AboutHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="column-section" id="about">
      <SectionHeader
        title={"About Us"}
        description={"Know our motivation and origin"}
      />
      <div className="flex items-center gap-12 flex-col-reverse sm:flex-row-reverse">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col gap-8">
            <div data-aos="fade-up" className="flex gap-2 w-full sm:w-[400px]">
              <img
                className="w-[40px] h-[40px]"
                src="https://ik.imagekit.io/akiAfnan/Asher/drink-svg.png?tr=w-50,h-50,f-auto,q-auto,fo-auto"
                alt=""
              />
              <p className="">
                At Asher, we believe it’s never too late to return to what’s
                right. It’s time to step away from the artificial and embrace
                the natural.{" "}
              </p>
            </div>
            <div data-aos="fade-up" className="flex gap-2 w-full sm:w-[400px]">
              <img
                className="w-[40px] h-[40px]"
                src="https://ik.imagekit.io/akiAfnan/Asher/drink-svg.png?tr=w-50,h-50,f-auto,q-auto,fo-auto"
                alt=""
              />
              <p className="">
                With every sip of our fresh, pure juices, you’re not just
                rewarding yourself—you’re choosing a healthier, stronger, and
                happier you.
              </p>
            </div>
            <div data-aos="fade-up" className="know-more-dark">
              <a href="/about">
                know more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="h-[325px] w-[350px] relative flex justify-center items-center">
            <img
              data-aos="fade-up"
              className="w-[200px] h-[200px] absolute rounded-full object-cover top-0"
              src="https://ik.imagekit.io/akiAfnan/Asher/pexels-charlotte-may-5946661.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto"
              alt=""
            />
            <img
              data-aos="fade-up"
              className="w-[200px] h-[200px] absolute rounded-full object-cover right-0 bottom-0"
              src="https://ik.imagekit.io/akiAfnan/Asher/pexels-charlotte-may-5947069.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAngleRight } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

function Join() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="column-section">
      <SectionHeader
        title={"Join us"}
        description={"Be a part of Asher Community"}
      />
      <div className="flex items-center gap-12 flex-col-reverse sm:flex-row">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col gap-8">
            <p className="w-full sm:w-[400px]" data-aos="fade-up">
              Be part of the Asher movement where health meets purity! Choose
              100% organic, preservative-free juices crafted for your
              well-being. Join us in embracing nature’s finest, raising
              awareness about real nutrition, and building a healthier future.
              Reward yourself with the gift of wellness. Join Asher today!
            </p>
            <div data-aos="fade-up" className="know-more-dark">
              <a href="/contact">
                contact us <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="h-[325px] w-[350px] relative flex justify-center items-center">
            <img
              data-aos="fade-up"
              className="w-[200px] h-[200px] absolute rounded-full object-cover top-0"
              src="https://ik.imagekit.io/akiAfnan/Asher/apple.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto"
              alt=""
            />
            <img
              data-aos="fade-up"
              className="w-[200px] h-[200px] absolute rounded-full object-cover left-0 bottom-0"
              src="https://ik.imagekit.io/akiAfnan/Asher/rasp.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;

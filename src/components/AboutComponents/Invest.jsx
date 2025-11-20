import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionHeader from "../SectionHeader";

const Invest = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const texts = [
    "100% organic, preservative-free, and health-conscious beverages.",
    "Products crafted with love, care, and nature’s finest ingredients.",
    "A commitment to educating and empowering you for better health choices.",
  ];

  return (
    <div className="column-section overflow-hidden sm:overflow-visible">
      <SectionHeader
        title={"Join the Asher Movement"}
        description={
          "Choose Asher - Reward Yourself and experience the difference"
        }
      />
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex justify-center items-center flex-1 relative">
          <div className="relative w-[250px] sm:w-[450px] h-[250px] sm:h-[450px]">
            <img
              data-aos="fade-up"
              className="w-full h-full object-cover rounded-full"
              src="https://ik.imagekit.io/akiAfnan/Asher/cocktail.jpg?tr=w-500,h-500,f-auto,q-auto,fo-auto"
              alt=""
            />
            <img
              data-aos="fade-right"
              className="absolute w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] object-cover rounded-full bottom-0 sm:-bottom-12 -right-12 sm:-right-24"
              src="https://ik.imagekit.io/akiAfnan/Asher/kiwi.jpg?tr=w-250,h-250,f-auto,q-auto,fo-auto"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 items-center justify-center flex-1"
        >
          {texts.map((text, id) => (
            <div key={id} className="w-full sm:w-[300px] flex gap-4">
              <i className="ph ph-checks -translate-y-1"></i>
              <p>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;

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
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 items-center justify-center flex-1"
        >
          {texts.map((text, id) => (
            <div key={id} className="w-full sm:w-[300px] flex gap-4">
              <i className="ph ph-checks"></i>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;

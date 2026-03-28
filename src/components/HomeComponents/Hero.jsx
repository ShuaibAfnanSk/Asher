import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

const cans = [
  "https://ik.imagekit.io/akiAfnan/Asher/grape-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/watermelon-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/apple-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/ginger-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/pineapple-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/orange-drink.png",
];

export default function Hero() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % cans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPos = (i) => {
    if (i === 1) return "center";
    if (i === 0) return "left";
    return "right";
  };

  return (
    <section className="relative w-full h-[100vh] md:h-[125vh]" id="home">
      <video
        className="w-full h-full object-cover absolute brightness-90"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://ik.imagekit.io/akiAfnan/Asher/4762243-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-full h-full absolute flex items-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#f8f8f8"
            fillOpacity="1"
            d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,106.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="px-8 md:pl-24 absolute w-full h-[100vh] flex flex-col justify-center gap-8">
        <div className="flex flex-col text-white items-start gap-6">
          <h3
            className="text-7xl md:text-9xl uppercase asher"
            style={{ lineHeight: "0.75" }}
            data-aos="fade-up"
          >
            Asher
          </h3>
          <div className="flex flex-col gap-3">
            <p className="font-black text-xl md:text-2xl" data-aos="fade-up">
              Blessings of Health, Happiness of Nature
            </p>
            <p className="w-[300px] md:text-lg sm:w-[450px]" data-aos="fade-up">
              What you pray for, nature has already gifted. Embrace the divine
              blessing of health with every sip.
            </p>
          </div>
          <div data-aos="fade-up" className="know-more">
            <a href="#about">
              know more <FaAngleRight />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="relative md:absolute md:bottom-24 md:right-6 p-2 border-white border w-[250px] rounded-md">
          <img
            className="w-[50px] h-[50px] absolute -top-5 right-5 z-10 rotate-12"
            src="https://ik.imagekit.io/akiAfnan/Asher/winner.png"
            alt=""
          />
          <div className="bg-white p-4 rounded-[4px] relative overflow-hidden">
            <p className="text-sm">
              India’s first 100% organic, health-conscious juice brand dedicated
              to offer naturally crafted beverages made without preservatives,
              chemicals, or added sugars.
            </p>
            <img
              src="https://ik.imagekit.io/akiAfnan/Asher/loader.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
              className="w-[75px] h-[75px] spin object-cover absolute -bottom-6 -right-6"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

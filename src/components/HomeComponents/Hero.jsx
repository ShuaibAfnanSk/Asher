import { FaAngleRight } from "react-icons/fa";
import { useData } from "../../context/DataContext";

const Hero = () => {

  const { usp } = useData();

  return (
    <section className="relative min-h-[100vh] flex items-end w-full" id="home">
      <video
        className="w-full h-full object-cover absolute brightness-75"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://ik.imagekit.io/akiAfnan/Asher/banner.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-full absolute p-8 h-full text-white flex items-center justify-center overflow-hidden">
        <div className="flex border-2 relative -translate-y-10 border-white p-10 rounded-lg flex-col w-full sm:w-[600px] gap-5 items-center text-center">
          {/* <div className="absolute h-full w-full" data-aos="fade-up">
            <img
              className="absolute w-[50px] h-[50px] object-cover -top-32 left-32"
              src="https://ik.imagekit.io/akiAfnan/Asher/lemon.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
              alt=""
            />
            <img
              className="absolute w-[50px] h-[50px] object-cover bottom-24 right-16"
              src="https://ik.imagekit.io/akiAfnan/Asher/pine-apple.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
              alt=""
            />
            <img
              className="absolute w-[50px] h-[50px] object-cover bottom-2 left-8"
              src="https://ik.imagekit.io/akiAfnan/Asher/loader.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
              alt=""
            />
          </div> */}
          <div className="absolute -top-[25px] left-[50%] -translate-x-[50%] rounded-full bg-white w-[50px] h-[50px] flex items-center justify-center">
            <img
              className="w-[25px] h-[25px]"
              src="https://ik.imagekit.io/akiAfnan/Asher/winner.png"
              alt=""
            />
          </div>
          <p data-aos="fade-up" className="font-bold text-base sm:text-lg underline">
            India's first 100% organic and Health concious juice brand
          </p>
          <h3
            className="text-white text-2xl sm:text-4xl font-extrabold"
            data-aos="fade-up"
          >
            Asher - Blessings of Health, Happiness of Nature
          </h3>
          <p data-aos="fade-up" className="text-sm sm:text-base">
            What you pray for, nature has already gifted. Embrace the divine
            blessing of health with every sip.
          </p>
          <div data-aos="fade-up" className="know-more">
            <a href="#about">
              know more <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center px-4 sm:px-6 py-6 bg-[#f8f8f8] gap-4 text-black sm:gap-8 w-full">
        {usp.map((u, id) => (
          <div key={id} className="flex flex-col gap-2 items-center">
            <img className="w-[30px] h-[30px]" src={u.image} alt="" />
            <p className="text-[8px] sm:text-xs text-center">{u.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

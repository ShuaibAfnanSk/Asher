import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import { useData } from "../../context/DataContext";

const Story = () => {

  const { invest, vision } = useData();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const textsLeft = [
    "In the rush to keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts that God has so abundantly provided.",
    "Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers. These are life’s true luxuries, crafted by nature’s hand and designed to nurture us.",
  ];

  const textsRight = [
    "We wake up every day surrounded by artificial solutions packaged cereals for breakfast, energy drinks for a quick boost, synthetic products promising beauty.",
    "With every sip of our fresh, pure juices, you’re not just rewarding yourself you’re choosing a healthier, stronger, and happier you. You’re giving your body the power to heal, protect, and thrive, just as it was meant to.",
  ];

  return (
    <section className="h-full w-full flex flex-col gap-12 overflow-hidden">
      <div className="w-full h-[100vh] relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full brightness-90 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://ik.imagekit.io/akiAfnan/Asher/about.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-full h-full absolute flex items-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#fafafa"
              fillOpacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,106.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h4
          className="text-4xl absolute text-white font-bold text-center"
          data-aos="fade-up"
        >
          Rediscover Nature, Rediscover Yourself
        </h4>
      </div>
      <div className="column-section">
        <div className="card-holder">
          <div className="card-col">
            {textsLeft.map((text, id) => (
              <p key={id} className="w-full sm:w-[400px]" data-aos="fade-up">
                {text}
              </p>
            ))}
          </div>
          <div className="card-row">
            <img
              data-aos="fade-up"
              className="card-img"
              src="https://ik.imagekit.io/akiAfnan/Asher/orange.jpg?tr=w-600,h-600,f-auto,q-auto,fo-auto"
              alt=""
            />
            <div
              data-aos="fade-right"
              className="subtle-shadow box left-2 lg:left-0"
            >
              <img
                className="fruit"
                src="https://ik.imagekit.io/akiAfnan/Asher/apple.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
                alt=""
              />
              <p className="text-sm sm:text-base">
                At Asher, we believe it’s never too late to return to what’s
                right. It’s time to step away from the artificial and embrace
                the natural.
              </p>
            </div>
          </div>
        </div>
        <div className="card-holder">
          <div className="card-row">
            <img
              data-aos="fade-up"
              className="card-img"
              src="https://ik.imagekit.io/akiAfnan/Asher/fruits.jpg?tr=w-600,h-600,f-auto,q-auto,fo-auto"
              alt=""
            />
            <div
              data-aos="fade-left"
              className="subtle-shadow box right-2 lg:right-0"
            >
              <img
                className="fruit"
                src="https://ik.imagekit.io/akiAfnan/Asher/ginger.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
                alt=""
              />
              <p className="text-sm sm:text-base">
                Life is a blessing, and so is nature. Let’s honor both by making
                better choices not just for today, but for every day to come.
              </p>
            </div>
          </div>
          <div className="card-col">
            {textsRight.map((text, id) => (
              <p key={id} className="w-full sm:w-[400px]" data-aos="fade-up">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="column-section mt-16">
        <SectionHeader
          title={"Mission & Vision"}
          description={
            "Reward yourself. Embrace the blessings of nature. Choose Asher."
          }
        />
        <div className="flex flex-wrap gap-4 justify-center">
          {vision.map((v, id) => (
            <div data-aos="fade-up" key={id} className="subtle-shadow bg-white flex flex-col relative gap-4 p-8 w-full sm:w-[400px]">
              <h5 className="font-bold">{v.name}</h5>
              <div className="subtle-shadow flex justify-center items-center absolute w-[50px] h-[50px] bg-white rounded-full -top-6 right-4">
                <img className="w-[35px] h-[35px]" src={v.image} alt="" />
              </div>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 px-4">
        <SectionHeader
          title={"What You’re Investing In"}
          description={
            "When you choose Asher, you’re not just buying a juice. You’re investing in:"
          }
        />
        <div className="w-full lg:w-[900px] flex flex-col gap-4">
          {invest.map((i, id) => (
            <div
              key={id}
              data-aos="fade-up"
              className="bg-white px-6 py-5 relative flex flex-col overflow-hidden gap-2 rounded-[3rem]"
            >
              <p>{i.name}</p>
              <img
                className="w-[50px] h-[50px] absolute bottom-0 right-0 -rotate-[25deg]"
                src={i.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;

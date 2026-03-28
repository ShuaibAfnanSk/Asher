import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useData } from "../../context/DataContext";

const cans = [
  "https://ik.imagekit.io/akiAfnan/Asher/grape-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/watermelon-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/apple-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/ginger-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/pineapple-drink.png",
  "https://ik.imagekit.io/akiAfnan/Asher/orange-drink.png",
];

const Usp = () => {
  const [index, setIndex] = useState(1);
  const { usp } = useData();

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
    <section
      className="relative bg-[#f8f8f8] overflow-hidden w-full flex flex-col py-8 lg:gap-0 gap-8 lg:flex-row items-center justify-center"
      id="home"
    >
      <div data-aos="fade-left" className="flex lg:flex-col flex-wrap justify-center items-center gap-4 lg:gap-8">
        {usp.slice(0, 3).map((u, id) => (
          <div key={id} className="flex w-[135px] bg-white p-4 rounded-md subtle-shadow flex-col gap-2 items-center">
            <img className="w-[30px] h-[30px]" src={u.image} alt="" />
            <p className="text-[8px] sm:text-xs text-center">{u.name}</p>
          </div>
        ))}
      </div>
      <div data-aos="fade-up" className="relative w-full sm:w-[600px] h-[400px] sm:h-[500px] flex items-center justify-center">
        {[-1, 0, 1].map((offset) => {
          const currentIndex = (index + offset + cans.length) % cans.length;
          const position = getPos(offset + 1);

          return (
            <motion.img
              key={cans[currentIndex]}
              src={cans[currentIndex]}
              initial={{ x: 200, opacity: 0 }}
              animate={{
                x: position === "center" ? 0 : position === "left" ? -90 : 90,
                scale: position === "center" ? 1 : 0.9,
                opacity: position === "center" ? 1 : 0.6,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`absolute object-cover ${
                position === "center"
                  ? "z-20 w-[125px] h-[350px] sm:w-[175px] sm:h-[450px]"
                  : "z-10 blur-sm sm:w-[175px] w-[125px] h-[350px] sm:h-[450px]"
              }`}
            />
          );
        })}
      </div>
      <div data-aos="fade-right" className="flex lg:flex-col justify-center flex-wrap items-center gap-4 lg:gap-8">
        {usp.slice(3, 5).map((u, id) => (
          <div key={id} className="flex bg-white p-4 w-[135px] rounded-md subtle-shadow flex-col gap-2 items-center">
            <img className="w-[30px] h-[30px]" src={u.image} alt="" />
            <p className="text-[8px] sm:text-xs text-center">{u.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usp;

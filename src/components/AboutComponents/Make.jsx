import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MakeBox from "./MakeBox";
import { useData } from "../../context/DataContext";

const Make = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { make } = useData();

  return (
    <section className="column-section items-center">
      <div className="flex gap-4 w-full flex-col lg:flex-row xl:w-[1200px]">
        <div className="w-full h-[100vh] lg:sticky top-9 flex-1 left-0 flex justify-center items-center">
          <img
            className="w-full lg:w-[400px] h-[500px] object-cover rounded-lg"
            src="https://ik.imagekit.io/akiAfnan/Asher/about.jpg?tr=w-450,h-600,f-auto,q-auto,fo-auto"
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center mt-4 lg:mt-0 flex-col gap-8">
          <h3
            className="font-bold text-2xl sm:text-3xl text-center"
            data-aos="fade-up"
          >
            What Makes Us Different?
          </h3>
          {make.Different.map((point, id) => (
            <MakeBox key={id} data={point} />
          ))}
          <h3
            className="font-bold text-2xl sm:text-3xl text-center"
            data-aos="fade-up"
          >
            Our Primary Focus
          </h3>
          {make.Focus.map((point, id) => (
            <MakeBox key={id} data={point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Make;

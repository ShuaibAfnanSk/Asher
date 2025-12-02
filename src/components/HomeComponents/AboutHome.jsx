import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-[100vh] relative w-full bg-transparent overflow-hidden">
      <div className="absolute w-full h-full flex px-8 justify-end items-center">
        <div
          data-aos="fade-left"
          className="flex flex-col gap-4 w-full sm:w-[500px] bg-white p-8 rounded-md"
        >
          <h3 className="uppercase font-bold text-2xl sm:text-4xl">
            About Asher
          </h3>
          <h5 className="text-lg sm:text-2xl">
            Know our motivation and origin
          </h5>
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <i className="ph ph-checks"></i>
              <p className="text-sm text-[rgba(0,0,0,0.75)] sm:text-base">
                At Asher, we believe it’s never too late to return to what’s
                right, It’s time to step away from the artificial and embrace
                the natural.
              </p>
            </div>
            <div className="w-full flex gap-4">
              <i className="ph ph-checks"></i>
              <p className="text-sm text-[rgba(0,0,0,0.75)] sm:text-base">
                With every sip of our fresh pure juices, you’re not just rewarding yourself—you’re choosing a healthier, stronger, and happier you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;

import Aos from "aos";
import { useEffect } from "react";
import SectionHeader from "../SectionHeader";

const Credibility = ({ product }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col items-center gap-12">
      <SectionHeader
        title={"Credibility"}
        description={"The Info provided is as sourced by below institutes"}
      />
      <div className="w-full lg:w-[900px] flex flex-col gap-4">
        {product.sourceCredibility.map((f, id) => (
          <div key={id} className="bg-white px-6 py-5 relative flex flex-col overflow-hidden gap-2 rounded-[3rem]">
            <p>{f}</p>
            <img
              className="w-[50px] h-[50px] absolute bottom-0 right-0 -rotate-[25deg]"
              src="https://ik.imagekit.io/akiAfnan/Asher/source.png?tr=w-75,h-75,f-auto,q-auto,fo-auto"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credibility;

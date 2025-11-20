import Aos from "aos";
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";

const Faq = ({ product }) => {
  const [show, setShow] = useState(0);

  const handleShow = (id) => {
    setShow((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="faq" className="flex flex-col items-center gap-12">
      <SectionHeader
        title={"Faq's"}
        description={"Frequently Asked Questions"}
      />
      <div className="w-full lg:w-[900px] flex flex-col gap-4">
        {product.faqs.map((f, id) => (
          <div key={id} data-aos="fade-up" className="flex flex-col">
            <div
              className="bg-white rounded-md p-6 relative flex flex-col overflow-hidden gap-2 cursor-pointer"
              onClick={() => handleShow(id)}
            >
              <h4 className="font-semibold">{f.question}</h4>
              {show === id && (
                <img
                  className="absolute w-[150px] h-[150px] object-cover -right-12 -bottom-12"
                  src={product.details[0].image}
                  alt=""
                />
              )}
              {show === id && (
                <p className="w-[90%] sm:w-[400px]">"{f.answer}"</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../SectionHeader";
import { useData } from "../../context/DataContext";

const Juice = () => {
 
  const { products } = useData();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="column-section">
      <SectionHeader
        title={"Our Juices"}
        description={"Crafted with real fruit goodness"}
        images={true}
      />
      <div className="flex justify-center flex-wrap gap-8">
        {products.map((product, id) => (
          <div
            key={id}
            data-aos="fade-up"
            className="juice-card w-full sm:w-[300px] md:w-[350px] rounded-xl cursor-pointer overflow-hidden"
          >
            <Link
              className="relative w-full h-[400px] overflow-hidden flex justify-center items-center"
              to={`product/${product.id}`}
              style={{ backgroundColor: product.color }}
            >
              <img
                src="https://ik.imagekit.io/akiAfnan/Asher/wavy.png?tr=w-500,h-500,f-auto,q-auto,fo-auto"
                className="wave-pattern"
                alt=""
              />
              <img
                src={product.image}
                className="juice-can w-[100px] h-[250px] z-1 object-cover"
                alt=""
              />
              <img
                src={product.details[0].image}
                className="absolute h-[150px] object-cover w-[125px] -bottom-12 -rotate-12 -right-6"
                alt=""
              />
              <div className="absolute left-0 top-4 overflow-hidden flex justify-center items-center z-2 bg-white rounded-br-[3rem] py-2 pl-4 pr-6 rounded-tr-[3rem]">
                <h4 className="text-center">{product.name}</h4>
                <img
                  className="w-[40px] h-[45px] absolute object-cover -right-4 -bottom-4"
                  src={product.details[0].image}
                  alt=""
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Juice;

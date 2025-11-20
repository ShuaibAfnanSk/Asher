import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";

const Flavour = ({ data }) => {
  const handlechange = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="flavour-wrapper">
      <SectionHeader
        title={"More Flavours"}
        description={"Here are more products from Asher"}
      />
      <div className="flavours">
        {data.map((d, key) => (
          <Link to={`/product/${d.id}`} onClick={handlechange} key={key}>
            <div className="flavour">
              <img src={d.image} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Flavour;

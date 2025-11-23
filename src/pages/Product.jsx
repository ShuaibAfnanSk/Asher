import AgeCriteria from "../components/ProductComponents/Age";
import Flavour from "../components/ProductComponents/Flavour";
import Ingredients from "../components/ProductComponents/Ingredients";
import PHero from "../components/ProductComponents/PHero";
import Quote from "../components/ProductComponents/Quote";
import Reaction from "../components/ProductComponents/Reaction";
import { useData } from "../context/DataContext";

const Product = () => {
  const { products } = useData();
  const id = location.pathname.split("/")[2];
  const product = products.find((p) => String(p.id) === String(id));

  return (
    <main className="product-container">
      <PHero product={product} />
      <Ingredients product={product} />
      <Reaction product={product} />
      <AgeCriteria product={product} />
      <Quote product={product} />
      <Flavour data={products} />
    </main>
  );
};

export default Product;

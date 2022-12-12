import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <br />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={product} />
      </div>
    </div>
  );
};

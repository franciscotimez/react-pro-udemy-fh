import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import '../styles/custom-styles.css';

const product = {
  id: "1",
  title: "Coffe Mug",
  img: './coffee-mug.png'
};

const product2 = {
  id: "2",
  title: "Coffe Mug - Meme",
  img: './coffee-mug2.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <br />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product2}
          className="bg-dark"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

      </div>
    </div>
  );
};

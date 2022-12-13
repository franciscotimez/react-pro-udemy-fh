import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import '../styles/custom-styles.css';

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#5CC7E5"
          }}
        >
          <ProductImage style={{
            boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"
          }} />
          <ProductTitle style={{
            fontWeight: "bold"
          }} />
          <ProductButtons style={{
            display: "flex",
            justifyContent: "end"
          }} />
        </ProductCard>

      </div>
    </div>
  );
};

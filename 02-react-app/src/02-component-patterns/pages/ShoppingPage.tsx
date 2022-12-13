import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";

import '../styles/custom-styles.css';

const products: Product[] = [
  {
    id: "1",
    title: "Coffe Mug",
    img: './coffee-mug.png'
  },
  {
    id: "2",
    title: "Coffe Mug - Meme",
    img: './coffee-mug2.png'
  }
];


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
        {products.map(product =>
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        )}

      </div>
    </div>
  );
};

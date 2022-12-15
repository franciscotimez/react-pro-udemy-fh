import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store - State initializer</h1>
      <br />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

    </div >
  );
};

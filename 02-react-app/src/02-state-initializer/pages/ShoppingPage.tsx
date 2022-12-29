import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store - State initializer</h1>
      <br />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>

    </div >
  );
};

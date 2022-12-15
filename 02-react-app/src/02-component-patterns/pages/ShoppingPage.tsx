import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <br />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          products.map(product =>
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              value={shoppingCart[product.id]?.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          )
        }

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                key={key}
                product={product}
                className="bg-dark"
                style={{ width: '100px' }}
                value={product.count}
                onChange={onProductCountChange}
              >
                <ProductImage className="custom-image" />
                <ProductButtons
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                />
              </ProductCard>
            ))
          }
        </div>

      </div>
    </div >
  );
};

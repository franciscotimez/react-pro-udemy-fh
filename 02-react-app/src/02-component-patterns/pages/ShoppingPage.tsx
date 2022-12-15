import { useState } from "react";
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

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart; }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product; }) => {
    console.log({ count });
    setShoppingCart(prev => {

      const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart
        };
      }

      // Borrar producto
      const { [product.id]: toDelete, ...rest } = prev;
      return rest;
    });
  };

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

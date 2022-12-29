import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const productData = {
  id: "1",
  title: "Coffe Mug",
  // img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
        product={productData}
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

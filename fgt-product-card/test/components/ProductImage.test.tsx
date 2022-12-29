import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src';
import { product2 } from '../../src/data/products';


describe('Pruebas en ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="http://imagen.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // test('Debe de mostrar el componente con la imagen default', () => {
  //   const wrapper = renderer.create(
  //     <ProductCard product={product1}>
  //       {
  //         () => (
  //           <ProductImage />
  //         )
  //       }
  //     </ProductCard>
  //   );
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });
});

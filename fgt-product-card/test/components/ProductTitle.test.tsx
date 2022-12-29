import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src';
import { product1 } from '../../src/data/products';


describe('Pruebas en ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

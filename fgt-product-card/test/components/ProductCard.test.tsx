import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src';
import { product1, product2 } from '../../src/data/products';


describe('Pruebas en ProductCard', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    // click
    renderer.act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    // expect((tree as any).children[1].children[0]).toBe('1');

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

# FGT-Product-card

### Fran

## Ejemplo

```jsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fgt-product-card';
```

```jsx
<ProductCard
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
```
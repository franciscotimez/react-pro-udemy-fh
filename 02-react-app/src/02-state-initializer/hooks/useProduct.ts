import { useEffect, useState, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {

  value = initialValues?.count || value;
  const [counter, setCounter] = useState<number>(value);

  console.log(initialValues?.count);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy
  };
};

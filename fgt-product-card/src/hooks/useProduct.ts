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

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    
    increaseBy,
    reset,
  };
};

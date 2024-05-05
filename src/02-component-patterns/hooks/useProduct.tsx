import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    const maxValue = Math.min(newValue, initialValues?.maxCount || 0);
    setCounter(maxValue);
    onChange && onChange({ count: maxValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [initialValues, value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    
    increaseBy,
    reset
  };
};

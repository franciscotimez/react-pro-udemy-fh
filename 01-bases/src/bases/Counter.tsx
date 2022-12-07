import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: CounterProps) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter(counter => counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

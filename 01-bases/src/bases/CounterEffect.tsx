import { useEffect, useState } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(3);

  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log("%cSe llego al valor maximo!", "color:red;");
    }

  }, [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};
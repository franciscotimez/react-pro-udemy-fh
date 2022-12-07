import { useEffect, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(3);

  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log("%cSe llego al valor maximo!", "color:red;");

      // Animacion
      gsap.to('h2', { y: -10, duration: 0.1, ease: 'ease.out' })
        .then(() => {
          gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' });
        });
    }

  }, [counter]);

  return (
    <>
      <h1>Counter: </h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(3);

  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUM_COUNT));
  };

  useLayoutEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log("%cSe llego al valor maximo!", "color:red;");

      // Animacion
      const timeLine = gsap.timeline();

      timeLine.to(counterElement.current, { y: -10, duration: 0.1, ease: 'ease.out' })
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
    }

  }, [counter]);

  return (
    <>
      <h1>Counter: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(0);

  const elementToAnimate = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, maxCount));
  };

  useLayoutEffect(() => {
    // Animacion
    if (!elementToAnimate.current) return;

    timeLine.current
      .to(elementToAnimate.current, { y: -10, duration: 0.1, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);

  useEffect(() => {
    timeLine.current.play(0);
  }, [counter]);


  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

export const CounterBy = ({ initialValue = 0 }: CounterProps) => {

  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (increment: number) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + increment,
      clicks: clicks + 1
    }));
  };

  const { counter, clicks } = counterState;
  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};

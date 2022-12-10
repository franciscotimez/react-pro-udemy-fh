
import { useReducer } from "react";
import * as CounterActions from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const initialState: CounterState = {
  counter: 10,
  previus: 10,
  changes: 10
};

export const CounterReducer = () => {

  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };


  return (
    <>
      <h1>Counter Reducer Segment: {counterState.counter}</h1>
      <pre>{JSON.stringify(counterState)}</pre>
      <button onClick={() => increaseBy(1)}>
        +1
      </button>
      <button onClick={() => increaseBy(5)}>
        +5
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

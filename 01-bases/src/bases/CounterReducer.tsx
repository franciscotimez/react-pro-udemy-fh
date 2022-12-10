import { useReducer } from "react";

interface CounterState {
  counter: number;
  previus: number;
  changes: number;
}

const initialState: CounterState = {
  counter: 10,
  previus: 10,
  changes: 10
};

type CounterAction =
  | { type: "increaseBy", payload: { value: number; }; }
  | { type: "reset"; };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previus: 0,
        changes: 0,
      };

    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previus: state.counter,
        changes: state.changes + 1,
      };

    default:
      return state;
  }
};




export const CounterReducer = () => {

  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({
      type: 'increaseBy',
      payload: { value }
    });
  };


  return (
    <>
      <h1>Counter Reducer: {counterState.counter}</h1>
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

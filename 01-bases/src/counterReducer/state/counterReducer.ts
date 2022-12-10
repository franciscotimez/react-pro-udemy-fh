import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";


export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

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
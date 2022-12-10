import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <CounterHook />
      <CounterEffect />
      <CounterBy initialValue={0}/>
      <Counter initialValue={0}/>
    </>
  );
}

export default App;

import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={3}/>
      <CounterBy initialValue={5}/>
    </>
  );
}

export default App;

import { createContext, useContext, useState } from "react";
const CounterContext = createContext();

const App = () => {
  const [value, setValue] = useState(0);
  const onIncrement = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <>
      <div onClick={onIncrement}>App: {value}</div>
      <CounterContext.Provider value={{ value, onIncrement }}>
        <Child1 />
      </CounterContext.Provider>
    </>
  );
};

export default App;
const Child1 = () => {
  return <Child2 />;
};
const Child2 = () => {
  const { value, onIncrement } = useContext(CounterContext);
  return <div onClick={onIncrement}>Child: {value}</div>;
};

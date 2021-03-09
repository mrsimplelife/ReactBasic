import React, { createContext, useReducer, useContext } from "react";
const CounterContext = createContext();
const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const reducer = (prevState, action) => {
  const { type, payload = 1 } = action;
  switch (type) {
    case INCREMENT:
      return prevState + payload;
    case DECREMENT:
      return prevState - payload;
    default:
      return prevState;
  }
};
const actionIncrement = (payload) => ({ type: INCREMENT, payload });
const actionDecrement = (payload) => ({ type: DECREMENT, payload });

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1 onClick={() => dispatch(actionIncrement(2))}>App9 : {state}</h1>
      <CounterContext.Provider value={{ state, dispatch }}>
        <GameBox />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
const GameBox = () => {
  const { state, dispatch } = useContext(CounterContext);
  const onClick = () => {
    dispatch(actionDecrement(3));
  };
  return (
    <div>
      <h2>GameBox</h2>
      <button onClick={onClick}>{state}</button>
    </div>
  );
};

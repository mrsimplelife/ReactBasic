import { useState, useReducer } from "react";

const SET_NAME = "SET_NAME";
const SET_AGE = "SET_AGE";
const reducer = (prevState, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_NAME:
      return { ...prevState, name: value };
    case SET_AGE:
      return { ...prevState, age: value };
    default:
      return prevState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", age: "" });
  // const [person, setPerson] = useState({ name: "", age: "" });
  const onChange = (e) => {
    const { name: type, value } = e.target;
    // setPerson((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
    dispatch({ type, value: value });
  };
  // const { name, age } = person;
  return (
    <div>
      <br />
      <input
        type="text"
        name={SET_NAME}
        placeholder="name"
        // onChange={(e) => setPerson({ age, name: e.target.value })}
        onChange={onChange}
      />
      <input
        type="text"
        name={SET_AGE}
        placeholder="age"
        // onChange={(e) => setPerson({ name, age: e.target.value })}
        onChange={onChange}
      />
      <hr />
      {/* {JSON.stringify(person)} */}
      {JSON.stringify(state)}
    </div>
  );
};

export default App;

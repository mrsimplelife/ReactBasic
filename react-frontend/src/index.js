import React from "react";
import ReactDOM from "react-dom";
import "index.css";
// import App from "App";
import reportWebVitals from "reportWebVitals";
// import App from "App2";
// import App from "App3";
// import TodoList from "TodoList";
import App from "App4";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <TodoList /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

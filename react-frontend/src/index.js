import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import reportWebVitals from "reportWebVitals";
// import App from "App";
// import App from "App2";
// import App from "App3";
// import TodoList from "TodoList";
// import App from "App4";
// import EpisodeList from "EpisodeList";
// import App, { AppClass } from "App5";
// import App from "App6";
// import App from "App7";
// import App from "App8";
// import App from "App9";
import App from "App10";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    <App />
    {/* <TodoList /> */}
    {/* <EpisodeList /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

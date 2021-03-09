import "App.css";
import { Component } from "react";
import Counter2 from "Counter2";
import Message from "Message";
import Profile from "Profile";

class App extends Component {
  render() {
    return (
      <>
        <Counter2 />
        <Counter2 color="green" />
        <Counter2 color="blue" />
        <Message />
        <Profile />
      </>
    );
  }
}

export default App;

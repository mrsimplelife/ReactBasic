import ErrorBoundary from "ErrorBoundary";
import { Component } from "react";

class Message extends Component {
  render() {
    throw new Error("의도한 에러");
    return "Message Component";
  }
}
function App() {
  return (
    <ErrorBoundary>
      <Message />
    </ErrorBoundary>
  );
}

export default App;

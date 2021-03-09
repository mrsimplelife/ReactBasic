import { Button } from "antd";
import "App.css";
import { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.initialValue,
  };
  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <div>{value}</div>
        <Button type="primary" onClick={this.onClick}>
          +1
        </Button>
      </>
    );
  }
}
class Fruit extends Component {
  render() {
    const { fruits } = this.props;
    return (
      <>
        <h1>
          <ul>
            {fruits.map((fruit) => (
              <li>{fruit}</li>
            ))}
          </ul>
        </h1>
      </>
    );
  }
}
function App() {
  const fruits = ["banana", "apple", "strawberry"];
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Counter initialValue={0} />
      <Counter initialValue={0} />
      <Fruit fruits={fruits} />
    </div>
  );
}

export default App;

import { Button } from "antd";
import "App.css";
import { Component } from "react";

const action = {
  init(initialValue) {
    return { value: initialValue };
  },
  increase(prev) {
    return { value: prev.value + 1 };
  },
  decrease(prev) {
    return { value: prev.value - 1 };
  },
};
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = action.init(this.props.initialValue);
  }
  // state = action.init(this.props.initialValue);
  // {
  //   value: this.props.initialValue,
  // };
  onClick = () => {
    // const { value } = this.state;
    // this.setState({ value: value + 1 });
    // this.setState({ value: value + 1 });
    // this.setState({ value: value + 1 });
    this.setState(({ value }) => ({ value: value + 1 }));
    this.setState(({ value }) => ({ value: value + 1 }));
    this.setState(({ value }) => ({ value: value + 1 }));
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <div>{value}</div>
        <Button type="primary" onClick={() => this.setState(action.decrease)}>
          -1
        </Button>
        <Button type="primary" onClick={() => this.setState(action.increase)}>
          +1
        </Button>
        <Button type="primary" onClick={this.onClick}>
          +3
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
              <li key={fruit}>{fruit}</li>
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

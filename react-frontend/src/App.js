import { Button } from "antd";
import "App.css";
import { Component } from "react";
import PropTypes from "prop-types";
import ThemedButton from "ThemedButton";
import Counter2 from "Counter";

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
        <Button
          style={{ width: 100 }}
          type="primary"
          onClick={() => this.setState(action.decrease)}
        >
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
class PostDetail extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  };
  state = {
    postDetail: null,
  };
  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }
  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }
  requestPost(postId) {
    console.log(postId);
    this.setState({
      postDetail: null,
    });
    setTimeout(() => {
      this.setState({
        postDetail: `post from ${postId}`,
      });
    }, 1000);
  }
  render() {
    const { postDetail } = this.state;
    return (
      <>
        post#{this.props.postId}
        <hr />
        {!postDetail && "loading..."}
        {postDetail}
      </>
    );
  }
}
class App extends Component {
  state = {
    postId: 10,
    myquery: "",
    language: "",
  };
  onChange = (e) => {
    const { name, value } = e.target;
    console.log(value, this);
    this.setState({
      [name]: value,
    });
  };
  render() {
    const fruits = ["banana", "apple", "strawberry"];
    return (
      <>
        <Counter initialValue={0} />
        <Counter initialValue={0} />
        <Counter initialValue={0} />
        <Fruit fruits={fruits} />
        <PostDetail postId={this.state.postId} />
        {/* <PostDetail /> */}
        <button onClick={() => this.setState({ postId: 20 })}>click</button>
        <ThemedButton label="say hello" />
        <Counter2 onClick={() => console.log("click")} />
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} />
        {JSON.stringify(this.state)}
      </>
    );
  }
}

export default App;

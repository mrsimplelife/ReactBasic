import PropTypes from "prop-types";
import { Component } from "react";

class Counter extends Component {
  static defaultProps = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  state = {
    value: 0,
  };
  render() {
    const { value } = this.state;
    return <div onClick={this.props.onClick}>{value}</div>;
  }
}

export default Counter;

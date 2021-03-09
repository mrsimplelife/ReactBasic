import { Input, List } from "antd";
import { Component } from "react";
// class TodoItem extends Component {
//   render() {
//     const { todo } = this.props;
//     return <li>{todo}</li>;
//   }
// }
// const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends Component {
  state = {
    todoList: ["python", "react", "django"],
    current: "",
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value,
    });
  };

  onKeyDown = (e) => {
    console.log(e.keyCode);
    const { keyCode } = e;
    if (keyCode === 13) {
      const { todoList, current } = this.state;
      if (!current.trim().length) {
        return;
      }
      this.setState({
        current: "",
        todoList: [...todoList, current],
      });
    }
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "30px auto" }}>
        <List
          header="todo list"
          dataSource={this.state.todoList}
          bordered
          renderItem={(todo) => <List.Item>{todo}</List.Item>}
          style={{ marginBottom: "4px" }}
        />
        <Input
          placeholder="todos"
          value={this.state.current}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        {/* <ul>
          {this.state.todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
        <input
          value={this.state.current}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <button>submit</button>
        <hr />
        {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default TodoList;
